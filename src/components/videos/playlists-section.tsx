import Link from 'next/link';
import Image from 'next/image';
import { ListVideo, ArrowRight } from 'lucide-react';

import { AnimatedListItem } from '@/components/common';
import { videos } from '@/lib/constants/videos';

export function PlaylistsSection() {
  const { playlists } = videos;
  if (playlists.length === 0) return null;

  return (
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
          <AnimatedListItem key={`${playlist.id}-${playlist.title}`} index={i}>
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
        className='group mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/40 py-3 text-sm text-white/60 backdrop-blur-md transition-all hover:border-cyan-500/30 hover:text-white'
      >
        See all {playlists.length} playlists
        <ArrowRight className='size-3.5 transition-transform group-hover:translate-x-0.5' />
      </Link>
    </section>
  );
}
