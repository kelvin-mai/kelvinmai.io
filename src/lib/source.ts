import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';
import matter from 'gray-matter';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import type { Heading } from 'mdast';

const DOCS_DIR = join(process.cwd(), 'src/content/docs');

export type TOCItemType = {
  title: string;
  url: string;
  depth: number;
};

export type PageData = {
  title: string;
  description?: string;
  full: boolean;
  toc: TOCItemType[];
  body: string;
  lastModified: Date;
};

export type Page = {
  slug: string[];
  url: string;
  data: PageData;
};

export type NavItem = {
  name: string;
  url: string;
  children?: NavItem[];
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function extractTOC(content: string): TOCItemType[] {
  const toc: TOCItemType[] = [];
  const tree = remark().parse(content);
  visit(tree, 'heading', (node: Heading) => {
    const title = toString(node);
    toc.push({ title, url: `#${slugify(title)}`, depth: node.depth });
  });
  return toc;
}

function getGitLastModified(filePath: string): Date {
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

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
}

function getMdxFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isFile() && e.name.endsWith('.mdx'))
    .map((e) => e.name);
}

function getSubdirs(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);
}

function parsePage(filePath: string, slug: string[]): Page {
  const raw = readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    url: '/registry/' + slug.join('/'),
    data: {
      title: (data.title as string) ?? '',
      description: data.description as string | undefined,
      full: (data.full as boolean) ?? false,
      toc: extractTOC(content),
      body: content,
      lastModified: getGitLastModified(filePath),
    },
  };
}

export const source = {
  generateParams(): { slug: string[] }[] {
    const params: { slug: string[] }[] = [];

    // Root-level MDX files
    for (const file of getMdxFiles(DOCS_DIR)) {
      params.push({ slug: [file.replace(/\.mdx$/, '')] });
    }

    // Category subdirectories
    for (const dir of getSubdirs(DOCS_DIR)) {
      for (const file of getMdxFiles(join(DOCS_DIR, dir))) {
        params.push({ slug: [dir, file.replace(/\.mdx$/, '')] });
      }
    }

    return params;
  },

  getPage(slug?: string[]): Page | null {
    if (!slug || slug.length === 0) return null;
    const filePath = join(DOCS_DIR, ...slug) + '.mdx';
    try {
      return parsePage(filePath, slug);
    } catch {
      return null;
    }
  },

  getPages(): Page[] {
    return this.generateParams()
      .map(({ slug }) => this.getPage(slug))
      .filter((p): p is Page => p !== null);
  },

  getPageTree(): { children: NavItem[] } {
    const children: NavItem[] = [];

    // Root-level pages first
    for (const file of getMdxFiles(DOCS_DIR)) {
      const slug = [file.replace(/\.mdx$/, '')];
      const page = this.getPage(slug);
      if (page) {
        children.push({ name: page.data.title, url: page.url });
      }
    }

    // Category folders
    for (const dir of getSubdirs(DOCS_DIR)) {
      const category: NavItem = {
        name: capitalize(dir),
        url: `/registry/${dir}`,
        children: [],
      };
      for (const file of getMdxFiles(join(DOCS_DIR, dir))) {
        const slug = [dir, file.replace(/\.mdx$/, '')];
        const page = this.getPage(slug);
        if (page) {
          category.children!.push({ name: page.data.title, url: page.url });
        }
      }
      if (category.children!.length > 0) children.push(category);
    }

    return { children };
  },
};
