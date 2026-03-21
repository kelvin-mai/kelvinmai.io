import Image from 'next/image';
import Link from 'next/link';

import {
  videos,
  getVideoUrl,
  getPlaylistUrl,
  getVideoThumbnail,
} from '@/lib/constants/videos';
import { blogs } from '@/lib/source';
import { AnimatedHomeCard } from './animated-home-card';

function getLatestVideoContent() {
  const latestStandalone = videos.standalone.reduce<
    (typeof videos.standalone)[0] | null
  >(
    (best, v) =>
      !best || new Date(v.publishedAt) > new Date(best.publishedAt) ? v : best,
    null,
  );

  const latestPlaylist = videos.playlists
    .map((playlist) => ({
      playlist,
      date: playlist.videos.reduce(
        (max, v) => Math.max(max, new Date(v.publishedAt).getTime()),
        0,
      ),
    }))
    .reduce<{ playlist: (typeof videos.playlists)[0]; date: number } | null>(
      (best, cur) => (!best || cur.date > best.date ? cur : best),
      null,
    );

  if (
    latestPlaylist &&
    (!latestStandalone ||
      latestPlaylist.date > new Date(latestStandalone.publishedAt).getTime())
  ) {
    return {
      title: latestPlaylist.playlist.title,
      href: getPlaylistUrl(latestPlaylist.playlist.id),
      thumbnail: latestPlaylist.playlist.image,
      type: 'playlist' as const,
    };
  }

  if (latestStandalone) {
    return {
      title: latestStandalone.title,
      href: getVideoUrl(latestStandalone.id),
      thumbnail: getVideoThumbnail(latestStandalone.id),
      type: 'video' as const,
    };
  }

  return null;
}

export function LatestContent() {
  const latestPost = blogs.getPosts()[0] ?? null;
  const latestVideoContent = getLatestVideoContent();

  if (!latestPost && !latestVideoContent) return null;

  return (
    <section className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {latestPost && (
        <Link href={latestPost.url} className='group block h-full'>
          <AnimatedHomeCard
            overrideClassName
            delay={4}
            className='bg-glass flex h-full flex-col overflow-hidden rounded-lg shadow'
          >
            {latestPost.data.image && (
              <div className='relative h-36 w-full shrink-0 overflow-hidden'>
                <Image
                  src={latestPost.data.image}
                  alt={latestPost.data.title}
                  fill
                  className='object-cover transition-transform duration-500 group-hover:scale-105'
                />
              </div>
            )}
            <div className='flex flex-1 flex-col space-y-1 p-4'>
              <p className='text-xs font-medium text-cyan-400'>Latest Post</p>
              <h3 className='font-semibold'>{latestPost.data.title}</h3>
              {latestPost.data.description && (
                <p className='text-muted-foreground line-clamp-2 flex-1 text-sm'>
                  {latestPost.data.description}
                </p>
              )}
            </div>
          </AnimatedHomeCard>
        </Link>
      )}
      {latestVideoContent && (
        <a
          href={latestVideoContent.href}
          target='_blank'
          rel='noopener noreferrer'
          className='group block h-full'
        >
          <AnimatedHomeCard
            overrideClassName
            delay={4}
            className='bg-glass flex h-full flex-col overflow-hidden rounded-lg shadow'
          >
            <div className='relative h-36 w-full shrink-0 overflow-hidden'>
              <Image
                src={latestVideoContent.thumbnail}
                alt={latestVideoContent.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
            </div>
            <div className='space-y-1 p-4'>
              <p className='text-xs font-medium text-cyan-400'>
                Latest{' '}
                {latestVideoContent.type === 'playlist' ? 'Playlist' : 'Video'}
              </p>
              <h3 className='font-semibold'>{latestVideoContent.title}</h3>
            </div>
          </AnimatedHomeCard>
        </a>
      )}
    </section>
  );
}
