/**
 * Syncs images between public/assets/ (gitignored) and Vercel Blob.
 *
 * Behaviors:
 *   - Local file not in manifest       → upload, add to manifest
 *   - Local file, hash differs          → warn and skip (use --force to overwrite)
 *   - Manifest entry, no local file     → download from blob to public/assets/
 *   - --prune                           → delete blobs for entries removed from manifest
 *
 * Usage:
 *   pnpm tsx scripts/blob-sync.mts
 *   pnpm tsx scripts/blob-sync.mts --force   # overwrite changed files
 *   pnpm tsx scripts/blob-sync.mts --prune   # delete orphaned blobs (destructive)
 */

process.loadEnvFile('.env');

import { put, del } from '@vercel/blob';
import { createHash } from 'crypto';
import {
  readFileSync,
  writeFileSync,
  readdirSync,
  mkdirSync,
  statSync,
  existsSync,
} from 'fs';
import { join, extname, relative } from 'path';

const ASSETS_DIR = join(process.cwd(), 'public/assets');
const MANIFEST_PATH = join(process.cwd(), 'blob-manifest.json');

const MIME: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.avif': 'image/avif',
};

type ManifestEntry = { url: string; hash: string };
type Manifest = Record<string, ManifestEntry>;

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const PRUNE = args.includes('--prune');

function md5(buf: Buffer): string {
  return createHash('md5').update(buf).digest('hex');
}

function collectFiles(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...collectFiles(full));
    } else if (extname(entry) in MIME) {
      results.push(full);
    }
  }
  return results;
}

function readManifest(): Manifest {
  if (!existsSync(MANIFEST_PATH)) return {};
  return JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8'));
}

function writeManifest(manifest: Manifest) {
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
}

// Key used in manifest: path relative to public/assets/
function manifestKey(absolutePath: string): string {
  return relative(ASSETS_DIR, absolutePath);
}

const manifest = readManifest();
mkdirSync(ASSETS_DIR, { recursive: true });

const localFiles = collectFiles(ASSETS_DIR);
const localKeys = new Set(localFiles.map(manifestKey));
const manifestKeys = new Set(Object.keys(manifest));

let uploaded = 0;
let downloaded = 0;
let skipped = 0;
let pruned = 0;

// --- Upload: local files not in manifest, or changed ---
for (const filePath of localFiles) {
  const key = manifestKey(filePath);
  const ext = extname(filePath);
  const contentType = MIME[ext];
  const buf = readFileSync(filePath);
  const hash = md5(buf);
  const existing = manifest[key];

  if (existing) {
    if (existing.hash === hash) continue; // up to date
    if (!FORCE) {
      console.warn(`⚠  CHANGED  ${key} (use --force to overwrite)`);
      skipped++;
      continue;
    }
    process.stdout.write(`  ↑ overwrite  ${key} → `);
  } else {
    process.stdout.write(`  ↑ upload     ${key} → `);
  }

  const blob = await put(key, buf, { access: 'public', contentType });
  manifest[key] = { url: blob.url, hash };
  console.log(blob.url);
  uploaded++;
}

// --- Download: manifest entries missing locally ---
for (const key of manifestKeys) {
  if (localKeys.has(key)) continue;

  const { url } = manifest[key];
  const destPath = join(ASSETS_DIR, key);
  mkdirSync(join(destPath, '..'), { recursive: true });

  process.stdout.write(`  ↓ download   ${key} → `);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED (${res.status})`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(destPath, buf);
  // Update hash in case it drifted
  manifest[key].hash = md5(buf);
  console.log(destPath);
  downloaded++;
}

// --- Prune: delete blobs for keys removed from manifest ---
if (PRUNE) {
  const removed = [...manifestKeys].filter((k) => !localKeys.has(k));
  if (removed.length === 0) {
    console.log('\nNothing to prune.');
  } else {
    console.log(`\nPruning ${removed.length} orphaned blob(s)...`);
    for (const key of removed) {
      const { url } = manifest[key];
      process.stdout.write(`  ✕ delete     ${key} → `);
      await del(url);
      delete manifest[key];
      console.log('deleted');
      pruned++;
    }
  }
}

writeManifest(manifest);

console.log(
  `\nDone. ↑ ${uploaded} uploaded  ↓ ${downloaded} downloaded  ⚠ ${skipped} skipped  ✕ ${pruned} pruned`,
);
