import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ListVideo } from 'lucide-react';

import { Footer } from '@/components/layout';
import { Badge } from '@/components/ui';
import {
  videos,
  getPlaylistUrl,
  type PlaylistEntry,
} from '@/lib/constants/videos';

export const metadata: Metadata = {
  title: 'Playlists',
  description:
    'Full-length YouTube playlists covering web development, APIs, and more.',
};

function PlaylistCard({ playlist }: { playlist: PlaylistEntry }) {
  return (
    <Link
      href={getPlaylistUrl(playlist.id)}
      target='_blank'
      rel='noopener noreferrer'
      className='group block overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'
    >
      <div className='relative h-56 shrink-0 overflow-hidden'>
        <Image
          src={playlist.image}
          alt={playlist.title}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-105'
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
        <div className='absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm'>
          <ListVideo className='size-3.5' />
          {playlist.videos.length} videos
        </div>
      </div>
      <div className='p-5'>
        <h3 className='mb-2 text-base font-semibold text-white transition-colors group-hover:text-cyan-300'>
          {playlist.title}
        </h3>
        {playlist.description && (
          <p className='mb-3 line-clamp-2 text-sm text-white/60'>
            {playlist.description}
          </p>
        )}
        {playlist.tags && playlist.tags.length > 0 && (
          <div className='mt-3 flex flex-wrap gap-1.5'>
            {playlist.tags.map((tag) => (
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
  );
}

export default function PlaylistsPage() {
  const { playlists } = videos;

  return (
    <>
      <div className='bg-mesh-gradient-eldritch-v2 fixed -z-10 min-h-screen w-full overflow-hidden' />
      <main className='container mx-auto max-w-6xl px-4 py-16'>
        <Link
          href='/videos'
          className='mb-10 inline-block text-sm text-white/40 transition-colors hover:text-cyan-400'
        >
          ← Videos
        </Link>

        <div className='mb-12'>
          <h1 className='mb-4 text-5xl font-bold tracking-tight text-white'>
            Playlists
          </h1>
          <p className='max-w-xl text-lg text-white/60'>
            {playlists.length} full-length playlists on YouTube.
          </p>
        </div>

        <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {playlists.map((playlist) => (
            <li key={`${playlist.id}-${playlist.title}`}>
              <PlaylistCard playlist={playlist} />
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
