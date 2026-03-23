import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

import { source } from '@/lib/source';
import { videos } from '@/lib/constants/videos';
import { Footer } from '@/components/layout';
import { AnimatedListItem } from '@/components/common';
import { BlogPostCard } from '@/components/blog';
import { VideoCard, PlaylistsSection } from '@/components/videos';

export const metadata: Metadata = {
  title: 'Content',
  description: 'Blog posts, videos, and playlists.',
};

const BLOG_PREVIEW = 4;
const VIDEO_PREVIEW = 6;

export default function ContentPage() {
  const latestPosts = source.blogs.getPosts().slice(0, BLOG_PREVIEW);
  const latestVideos = videos.standalone.slice(0, VIDEO_PREVIEW);

  return (
    <>
      <div className='bg-mesh-gradient-eldritch-v2 fixed -z-10 min-h-screen w-full overflow-hidden' />
      <main className='container mx-auto max-w-6xl px-4 py-16'>
        <div className='mb-12'>
          <h1 className='mb-4 text-5xl font-bold tracking-tight text-white'>
            Content
          </h1>
          <p className='max-w-xl text-lg text-white/60'>
            Blog posts, videos, and playlists.
          </p>
        </div>

        <section className='mb-16'>
          <div className='mb-6 flex items-center justify-between'>
            <h2 className='text-2xl font-bold text-white'>Blog Posts</h2>
            <Link
              href='/blog'
              className='group flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-cyan-400'
            >
              View all posts
              <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
            </Link>
          </div>
          <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {latestPosts.map((post, i) => (
              <AnimatedListItem key={post.slug} index={i} className='h-full'>
                <BlogPostCard post={post} />
              </AnimatedListItem>
            ))}
          </ul>
          <Link
            href='/blog'
            className='group mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 py-3 text-sm text-white/60 backdrop-blur-md transition-all hover:border-cyan-500/30 hover:text-white'
          >
            See all posts
            <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
          </Link>
        </section>

        <PlaylistsSection />

        <section>
          <div className='mb-6 flex items-center justify-between'>
            <h2 className='text-2xl font-bold text-white'> Videos</h2>
            <Link
              href='/videos'
              className='group flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-cyan-400'
            >
              View all videos
              <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
            </Link>
          </div>
          <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {latestVideos.map((video, i) => (
              <AnimatedListItem key={video.id} index={i}>
                <VideoCard video={video} />
              </AnimatedListItem>
            ))}
          </ul>
          <Link
            href='/videos'
            className='group mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 py-3 text-sm text-white/60 backdrop-blur-md transition-all hover:border-cyan-500/30 hover:text-white'
          >
            See all videos
            <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
