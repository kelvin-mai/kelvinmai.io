/**
 * Reorders blog post filenames so their numeric prefixes match chronological
 * date order from frontmatter. Useful when backdating posts on a feature branch.
 *
 * Usage:
 *   pnpm reorder:blogs          # preview changes (dry run)
 *   pnpm reorder:blogs --apply  # rename files
 */

import matter from 'gray-matter';
import { readdirSync, readFileSync, renameSync } from 'fs';
import { join } from 'path';

const BLOGS_DIR = join(process.cwd(), 'content/blogs');
const APPLY = process.argv.includes('--apply');
const PREFIX_STEP = 10;

function stripPrefix(filename: string): string {
  return filename.replace(/^\d+-/, '');
}

function parseDate(filename: string): Date {
  const content = readFileSync(join(BLOGS_DIR, filename), 'utf-8');
  const { data } = matter(content);
  if (!data.date) throw new Error(`${filename} is missing a date in frontmatter`);
  return new Date(data.date as string);
}

const files = readdirSync(BLOGS_DIR)
  .filter((f) => f.endsWith('.mdx'))
  .map((filename) => ({ filename, date: parseDate(filename) }))
  .sort((a, b) => a.date.getTime() - b.date.getTime());

console.log(`\nFound ${files.length} posts. ${APPLY ? 'Applying changes.' : 'Dry run — pass --apply to rename.'}\n`);

let changed = 0;

files.forEach(({ filename }, i) => {
  const prefix = String((i + 1) * PREFIX_STEP).padStart(4, '0');
  const slug = stripPrefix(filename);
  const newFilename = `${prefix}-${slug}`;

  if (newFilename === filename) {
    console.log(`  ✓  ${filename}`);
    return;
  }

  console.log(`  →  ${filename}`);
  console.log(`     ${newFilename}`);

  if (APPLY) {
    renameSync(join(BLOGS_DIR, filename), join(BLOGS_DIR, newFilename));
  }

  changed++;
});

console.log(
  `\n${changed} file(s) would be renamed.${APPLY && changed > 0 ? ' Done.' : ' Run with --apply to apply.'}`,
);
