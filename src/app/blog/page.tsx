import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

import { source } from '@/lib/source';
import { Footer } from '@/components/layout';
import { Badge } from '@/components/ui';

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
      <div className='bg-mesh-gradient-eldritch-v2 fixed -z-10 min-h-screen w-full overflow-hidden' />
      <main className='container mx-auto max-w-5xl px-4 py-16'>
        <div className='mb-12'>
          <h1 className='mb-4 text-5xl font-bold tracking-tight text-white'>
            Blog
          </h1>
          <p className='max-w-xl text-lg text-white/60'>
            Thoughts on web development, open source, and software engineering.
          </p>
        </div>

        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={post.url}
                className='group block overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'
              >
                {post.data.image ? (
                  <div className='relative h-44 overflow-hidden'>
                    <Image
                      src={post.data.image}
                      alt={post.data.title}
                      fill
                      className='object-cover transition-transform duration-500 group-hover:scale-105'
                      sizes='(max-width: 640px) 100vw, 50vw'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                  </div>
                ) : (
                  <div className='h-44 bg-gradient-to-br from-cyan-950/40 to-purple-950/40' />
                )}
                <div className='p-5'>
                  <div className='mb-2 flex items-center gap-2 text-xs text-cyan-400'>
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
                  <h2 className='mb-2 text-lg font-semibold text-white transition-colors group-hover:text-cyan-300'>
                    {post.data.title}
                  </h2>
                  {post.data.description && (
                    <p className='mb-3 line-clamp-2 text-sm text-white/60'>
                      {post.data.description}
                    </p>
                  )}
                  {post.data.tags && post.data.tags.length > 0 && (
                    <div className='flex flex-wrap gap-1.5'>
                      {post.data.tags.map((tag) => (
                        <Badge
                          key={tag}
                          className='bg-neutral-800 font-semibold text-neutral-200 hover:bg-neutral-700 hover:text-neutral-50'
                        >
                          {tag}
                        </Badge>
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
