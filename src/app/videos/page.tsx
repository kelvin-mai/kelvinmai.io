import type { Metadata } from 'next';

import { Footer } from '@/components/layout';
import { AnimatedListItem, Pagination } from '@/components/common';
import { VideoCard, PlaylistsSection } from '@/components/videos';
import { videos } from '@/lib/constants/videos';

const PAGE_SIZE = 12;

export const metadata: Metadata = {
  title: 'Videos',
  description: 'YouTube videos and playlists.',
};

export default async function VideosPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const { standalone } = videos;
  const totalPages = Math.ceil(standalone.length / PAGE_SIZE);
  const page = Math.min(
    Math.max(1, parseInt(pageParam ?? '1', 10) || 1),
    totalPages,
  );
  const pagedVideos = standalone.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  return (
    <>
      <div className='bg-mesh-gradient-eldritch-v2 fixed -z-10 min-h-screen w-full overflow-hidden' />
      <main className='container mx-auto max-w-6xl px-4 py-16'>
        <div className='mb-12'>
          <h1 className='mb-4 text-5xl font-bold tracking-tight text-white'>
            Videos
          </h1>
          <p className='max-w-xl text-lg text-white/60'>
            YouTube videos and playlists.
          </p>
        </div>

        {standalone.length > 0 && (
          <section>
            <h2 className='mb-6 text-2xl font-bold text-white'>Videos</h2>
            <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              {pagedVideos.map((video, i) => (
                <AnimatedListItem key={video.id} index={i}>
                  <VideoCard video={video} />
                </AnimatedListItem>
              ))}
            </ul>
            <Pagination
              page={page}
              totalPages={totalPages}
              basePath='/videos'
            />
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
