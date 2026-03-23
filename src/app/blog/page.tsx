import type { Metadata } from 'next';

import { source } from '@/lib/source';
import { Footer } from '@/components/layout';
import { AnimatedListItem, Pagination } from '@/components/common';
import { BlogPostCard } from '@/components/blog';

const { blogs } = source;
const PAGE_SIZE = 12;

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on web development, open source, and software engineering.',
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const allPosts = blogs.getPosts();
  const totalPages = Math.ceil(allPosts.length / PAGE_SIZE);
  const page = Math.min(
    Math.max(1, parseInt(pageParam ?? '1', 10) || 1),
    totalPages,
  );
  const posts = allPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
          {posts.map((post, i) => (
            <AnimatedListItem key={post.slug} index={i} className='h-full'>
              <BlogPostCard post={post} />
            </AnimatedListItem>
          ))}
        </ul>

        <Pagination page={page} totalPages={totalPages} basePath='/blog' />
      </main>
      <Footer />
    </>
  );
}
