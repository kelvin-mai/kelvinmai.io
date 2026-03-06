import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import {
  extractTOC,
  getGitLastModified,
  getMdxFiles,
  getSubdirs,
} from './utils';
import type { TOCItemType } from './utils';

export type { TOCItemType };

const DOCS_DIR = join(process.cwd(), 'content/docs');

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

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ');
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

export const docs = {
  generateParams(): { slug: string[] }[] {
    const params: { slug: string[] }[] = [];

    for (const file of getMdxFiles(DOCS_DIR)) {
      params.push({ slug: [file.replace(/\.mdx$/, '')] });
    }

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

    for (const file of getMdxFiles(DOCS_DIR)) {
      const slug = [file.replace(/\.mdx$/, '')];
      const page = this.getPage(slug);
      if (page) {
        children.push({ name: page.data.title, url: page.url });
      }
    }

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
