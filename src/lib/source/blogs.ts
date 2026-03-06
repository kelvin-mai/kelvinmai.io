import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

import { getMdxFiles } from './utils';

const BLOGS_DIR = join(process.cwd(), 'content/blogs');

export type BlogPostData = {
  title: string;
  description?: string;
  date: Date;
  tags?: string[];
  canonicalUrl?: string;
  image?: string;
  body: string;
  readTime: number;
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
      image: data.image as string | undefined,
      body: content,
      readTime: Math.max(1, Math.ceil(content.split(/\s+/).length / 200)),
    },
  };
}

export const blogs = {
  generateParams(): { slug: string }[] {
    try {
      return getMdxFiles(BLOGS_DIR).map((file) => ({
        slug: file.replace(/\.mdx$/, ''),
      }));
    } catch {
      return [];
    }
  },

  getPost(slug: string): BlogPost | null {
    const filePath = join(BLOGS_DIR, `${slug}.mdx`);
    try {
      return parseBlogPost(filePath, slug);
    } catch {
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
