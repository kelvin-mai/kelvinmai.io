import Link from 'next/link';

import { cn } from '@/lib/utils';

type PaginationProps = {
  page: number;
  totalPages: number;
  basePath: string;
};

export function Pagination({ page, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const href = (p: number) => `${basePath}?page=${p}`;

  return (
    <nav className='mt-12 flex items-center justify-center gap-2'>
      <Link
        href={href(page - 1)}
        aria-disabled={page <= 1}
        className={cn(
          'rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/60 transition-colors',
          page <= 1
            ? 'pointer-events-none opacity-30'
            : 'hover:border-cyan-500/30 hover:text-white',
        )}
      >
        ← Prev
      </Link>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <Link
          key={p}
          href={href(p)}
          className={cn(
            'rounded-lg border px-4 py-2 text-sm transition-colors',
            p === page
              ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300'
              : 'border-white/10 bg-black/40 text-white/60 hover:border-cyan-500/30 hover:text-white',
          )}
        >
          {p}
        </Link>
      ))}
      <Link
        href={href(page + 1)}
        aria-disabled={page >= totalPages}
        className={cn(
          'rounded-lg border border-white/10 bg-black/40 px-4 py-2 text-sm text-white/60 transition-colors',
          page >= totalPages
            ? 'pointer-events-none opacity-30'
            : 'hover:border-cyan-500/30 hover:text-white',
        )}
      >
        Next →
      </Link>
    </nav>
  );
}
