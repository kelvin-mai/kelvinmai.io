'use client';

import * as React from 'react';
import { Text } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { TOCItemType } from './toc';

interface TableOfContentsProps {
  items: TOCItemType[];
  className?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  className,
}) => {
  const [active, setActive] = React.useState<string | undefined>();
  const headingRefs = React.useRef<Map<string, IntersectionObserverEntry>>(
    new Map(),
  );
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (id) {
            headingRefs.current.set(id, entry);
          }
        });

        const visibleHeadings = Array.from(headingRefs.current.values())
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visibleHeadings.length > 0) {
          setActive(visibleHeadings[0]?.target.id);
        }
      },
      {
        rootMargin: '0% 0% -80% 0%',
        threshold: [0, 1],
      },
    );

    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading) => {
      if (heading.id && observerRef.current) {
        observerRef.current.observe(heading);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    const id = url.replace('#', '');
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <nav className={cn('relative py-4', className)}>
      <h3 className='inline-flex items-center gap-2 text-base font-semibold'>
        <Text className='size-4' />
        On This Page
      </h3>

      <ul className='mt-2 space-y-2 pl-4'>
        {items.map((item) => {
          const id = item.url.replace('#', '');
          const isActive = active === id;
          return (
            <li
              key={id}
              data-target={id}
              style={{
                paddingLeft: `${(item.depth - 1) * 16}px`,
              }}
              className='relative'
            >
              <a
                href={item.url}
                onClick={(e) => handleClick(e, item.url)}
                className={cn(
                  'hover:text-primary block py-1 text-sm transition-colors',
                  isActive
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground',
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
