import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { getMdxFiles, extractTOC, type TOCItemType } from './utils';

const BLOGS_DIR = join(process.cwd(), 'content/blogs');

export type BlogPostData = {
  title: string;
  description?: string;
  date: Date;
  tags?: string[];
  canonicalUrl?: string;
  image: string;
  body: string;
  readTime: number;
  toc: TOCItemType[];
};

export type BlogPost = {
  slug: string;
  url: string;
  data: BlogPostData;
};

function parseBlogPost(filePath: string, slug: string): BlogPost {
  const raw = readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    url: `/blog/${slug}`,
    data: {
      title: (data.title as string) ?? '',
      description: data.description as string | undefined,
      date: new Date(data.date as string),
      tags: data.tags as string[] | undefined,
      canonicalUrl: data.canonicalUrl as string | undefined,
      image:
        (data.image as string | undefined) ??
        'https://pttjrd5bylwkefgv.public.blob.vercel-storage.com/placeholder.png',
      body: content,
      readTime: Math.max(1, Math.ceil(content.split(/\s+/).length / 200)),
      toc: extractTOC(content),
    },
  };
}

function fileToSlug(filename: string): string {
  return filename.replace(/\.mdx$/, '').replace(/^\d+-/, '');
}

export const blogs = {
  generateParams(): { slug: string }[] {
    try {
      return getMdxFiles(BLOGS_DIR).map((file) => ({
        slug: fileToSlug(file),
      }));
    } catch (error) {
      console.warn('blogs.generateParams failed:', error);
      return [];
    }
  },

  getPost(slug: string): BlogPost | null {
    try {
      const filename = getMdxFiles(BLOGS_DIR).find(
        (f) => fileToSlug(f) === slug,
      );
      if (!filename) return null;
      return parseBlogPost(join(BLOGS_DIR, filename), slug);
    } catch (error) {
      console.warn(`blogs.getPost failed for slug "${slug}":`, error);
      return null;
    }
  },

  getPosts(): BlogPost[] {
    return this.generateParams()
      .map(({ slug }) => this.getPost(slug))
      .filter((p): p is BlogPost => p !== null)
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  },
};
