import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

import { source } from '@/lib/source';
import { Footer } from '@/components/layout';

const { blogs } = source;

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on web development, open source, and software engineering.',
};

export default function BlogPage() {
  const posts = blogs.getPosts();

  return (
    <>
      <main className='container mx-auto max-w-3xl px-4 py-16'>
        <h1 className='mb-2 text-4xl font-bold tracking-tight'>Blog</h1>
        <p className='text-muted-foreground mb-12 text-lg'>
          Thoughts on web development, open source, and software engineering.
        </p>
        <ul className='flex flex-col gap-8'>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={post.url} className='group flex gap-6'>
                {post.data.image && (
                  <div className='relative hidden h-28 w-44 shrink-0 overflow-hidden rounded-md sm:block'>
                    <Image
                      src={post.data.image}
                      alt={post.data.title}
                      fill
                      className='object-cover transition-transform duration-300 group-hover:scale-105'
                      sizes='176px'
                    />
                  </div>
                )}
                <div className='min-w-0 flex-1'>
                  <div className='text-muted-foreground mb-1 flex items-center gap-2 text-sm'>
                    <span>
                      {post.data.date.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span>·</span>
                    <span>{post.data.readTime} min read</span>
                  </div>
                  <h2 className='group-hover:text-primary mb-2 text-xl font-semibold transition-colors'>
                    {post.data.title}
                  </h2>
                  {post.data.description && (
                    <p className='text-muted-foreground line-clamp-2 text-sm'>
                      {post.data.description}
                    </p>
                  )}
                  {post.data.tags && post.data.tags.length > 0 && (
                    <div className='mt-3 flex flex-wrap gap-2'>
                      {post.data.tags.map((tag) => (
                        <span
                          key={tag}
                          className='bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
