import { readdirSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import type { Heading } from 'mdast';

export type TOCItemType = {
  title: string;
  url: string;
  depth: number;
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function extractTOC(content: string): TOCItemType[] {
  const toc: TOCItemType[] = [];
  const tree = remark().parse(content);
  visit(tree, 'heading', (node: Heading) => {
    const title = toString(node);
    toc.push({ title, url: `#${slugify(title)}`, depth: node.depth });
  });
  return toc;
}

export function getGitLastModified(filePath: string): Date {
  try {
    const result = execSync(`git log -1 --format="%cI" -- "${filePath}"`, {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    return result ? new Date(result) : new Date();
  } catch {
    return new Date();
  }
}

export function getMdxFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.mdx'))
    .map((e) => e.name);
}

export function getSubdirs(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}
