import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { getMdxFiles } from './utils';

const PAGES_DIR = join(process.cwd(), 'content/pages');

export type MdxPageData = {
  title: string;
  description?: string;
  body: string;
};

export type MdxPage = {
  slug: string;
  data: MdxPageData;
};

function parsePage(filePath: string, slug: string): MdxPage {
  const raw = readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    data: {
      title: (data.title as string) ?? '',
      description: data.description as string | undefined,
      body: content,
    },
  };
}

export const pages = {
  generateParams(): { slug: string }[] {
    try {
      return getMdxFiles(PAGES_DIR).map((file) => ({
        slug: file.replace(/\.mdx$/, ''),
      }));
    } catch (error) {
      console.warn('pages.generateParams failed:', error);
      return [];
    }
  },

  getPage(slug: string): MdxPage | null {
    const filePath = join(PAGES_DIR, `${slug}.mdx`);
    try {
      return parsePage(filePath, slug);
    } catch (error) {
      console.warn(`pages.getPage failed for slug "${slug}":`, error);
      return null;
    }
  },
};
