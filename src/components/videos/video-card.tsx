import Link from 'next/link';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

import {
  getVideoUrl,
  getVideoThumbnail,
  type VideoEntry,
} from '@/lib/constants/videos';

export function VideoCard({ video }: { video: VideoEntry }) {
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
