import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PlayCircle, ListVideo, ArrowRight } from 'lucide-react';

import { Footer } from '@/components/layout';
import { AnimatedListItem } from '@/components/common';
import {
  videos,
  getVideoUrl,
  getVideoThumbnail,
  type VideoEntry,
} from '@/lib/constants/videos';

export const metadata: Metadata = {
  title: 'Videos',
  description: 'YouTube videos and playlists.',
};

function VideoCard({ video }: { video: VideoEntry }) {
  return (
    <Link
      href={getVideoUrl(video.id)}
      target='_blank'
      rel='noopener noreferrer'
      className='group block overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'
    >
      <div className='relative h-52 shrink-0 overflow-hidden'>
        <Image
          src={getVideoThumbnail(video.id)}
          alt={video.title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
        <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          <PlayCircle className='size-14 text-white drop-shadow-lg' />
        </div>
      </div>
      <div className='p-4'>
        <p className='mb-1.5 text-xs text-cyan-400'>
          {new Date(video.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </p>
        <h3 className='text-sm leading-snug font-semibold text-white transition-colors group-hover:text-cyan-300'>
          {video.title}
        </h3>
      </div>
    </Link>
  );
}

export default function VideosPage() {
  const { standalone, playlists } = videos;

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

        {playlists.length > 0 && (
          <section className='mb-16'>
            <div className='mb-6 flex items-center justify-between'>
              <h2 className='text-2xl font-bold text-white'>Playlists</h2>
              <Link
                href='/videos/playlists'
                className='group flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-cyan-400'
              >
                <ListVideo className='size-4' />
                View all {playlists.length} playlists
                <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
              </Link>
            </div>
            <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              {playlists.slice(0, 3).map((playlist, i) => (
                <AnimatedListItem
                  key={`${playlist.id}-${playlist.title}`}
                  index={i}
                >
                  <Link
                    href='/videos/playlists'
                    className='group block overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'
                  >
                    <div className='relative h-52 overflow-hidden'>
                      <Image
                        src={playlist.image}
                        alt={playlist.title}
                        fill
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
                      <div className='absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2 py-1 text-xs text-white/80 backdrop-blur-sm'>
                        <ListVideo className='size-3.5' />
                        {playlist.videos.length} videos
                      </div>
                    </div>
                    <div className='p-4'>
                      <h3 className='font-semibold text-white transition-colors group-hover:text-cyan-300'>
                        {playlist.title}
                      </h3>
                      {playlist.description && (
                        <p className='mt-1 line-clamp-2 text-sm text-white/60'>
                          {playlist.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </AnimatedListItem>
              ))}
            </ul>
            <Link
              href='/videos/playlists'
              className='group mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm text-white/50 backdrop-blur-sm transition-all hover:border-cyan-500/30 hover:text-cyan-400'
            >
              See all {playlists.length} playlists
              <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
            </Link>
          </section>
        )}

        {standalone.length > 0 && (
          <section>
            <h2 className='mb-6 text-2xl font-bold text-white'>Videos</h2>
            <ul className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
              {standalone.map((video, i) => (
                <AnimatedListItem key={video.id} index={i}>
                  <VideoCard video={video} />
                </AnimatedListItem>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
