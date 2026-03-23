import Link from 'next/link';
import Image from 'next/image';

import { Badge } from '@/components/ui';
import type { BlogPost } from '@/lib/source';

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.url}
      className='group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'
    >
      {post.data.image ? (
        <div className='relative h-44 shrink-0 overflow-hidden'>
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
        <div className='h-44 shrink-0 bg-gradient-to-br from-cyan-950/40 to-purple-950/40' />
      )}
      <div className='flex flex-1 flex-col p-5'>
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
          <p className='mb-3 line-clamp-2 flex-1 text-sm text-white/60'>
            {post.data.description}
          </p>
        )}
        {post.data.tags && post.data.tags.length > 0 && (
          <div className='mt-auto flex flex-wrap gap-1.5'>
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
  );
}
