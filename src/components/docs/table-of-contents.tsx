'use client';

import * as React from 'react';
import { Text } from 'lucide-react';

import type { TOCItemType } from '@/lib/source';
import { cn } from '@/lib/utils';

// --- Utility hooks replacing fumadocs-core/utils ---

function useEffectEvent<T extends (...args: unknown[]) => unknown>(fn: T): T {
  const ref = React.useRef(fn);
  React.useLayoutEffect(() => {
    ref.current = fn;
  });
  return React.useCallback(
    (...args: unknown[]) => ref.current(...args),
    [],
  ) as T;
}

// --- Active anchor tracking replacing fumadocs-core/toc ---

function useActiveAnchors(items: TOCItemType[]): string[] {
  const [active, setActive] = React.useState<string[]>([]);

  React.useEffect(() => {
    const ids = items.map((item) => item.url.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        setActive((prev) => {
          let next = [...prev];
          for (const entry of entries) {
            const id = entry.target.id;
            if (entry.isIntersecting) {
              if (!next.includes(id)) next = [...next, id];
            } else {
              next = next.filter((a) => a !== id);
            }
          }
          return next;
        });
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: 1.0 },
    );

    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  return active;
}

// --- TOC thumb ---

type TOCThumb = [top: number, height: number];

const getItemOffset = (depth: number): number => {
  if (depth <= 2) return 14;
  if (depth === 3) return 26;
  return 36;
};

const getLineOffset = (depth: number): number => {
  return depth >= 3 ? 10 : 0;
};

const calcThumb = (container: HTMLElement, active: string[]): TOCThumb => {
  if (active.length === 0 || container.clientHeight === 0) return [0, 0];

  let upper = Number.MAX_VALUE,
    lower = 0;

  for (const item of active) {
    const element = container.querySelector<HTMLElement>(`a[href="#${item}"]`);
    if (!element) continue;
    const styles = getComputedStyle(element);
    upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop));
    lower = Math.max(
      lower,
      element.offsetTop +
        element.clientHeight -
        parseFloat(styles.paddingBottom),
    );
  }

  return [upper, lower - upper];
};

type TocThumbProps = React.ComponentProps<'div'> & {
  containerRef: React.RefObject<HTMLElement | null>;
  active: string[];
};

const TocThumb: React.FC<TocThumbProps> = ({
  containerRef,
  active,
  ...props
}) => {
  const thumbRef = React.useRef<HTMLDivElement>(null);

  const onResize = useEffectEvent(() => {
    if (!containerRef.current || !thumbRef.current) return;
    const [top, height] = calcThumb(containerRef.current, active);
    thumbRef.current.style.setProperty('--fd-top', `${top}px`);
    thumbRef.current.style.setProperty('--fd-height', `${height}px`);
  });

  React.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    onResize();
    const observer = new ResizeObserver(onResize);
    observer.observe(container);
    return () => observer.disconnect();
  }, [containerRef]);

  const prevActive = React.useRef(active);
  React.useEffect(() => {
    if (prevActive.current !== active) {
      onResize();
      prevActive.current = active;
    }
  });

  return <div ref={thumbRef} role='none' {...props} />;
};

// --- TOC item ---

type TOCItemProps = {
  item: TOCItemType;
  upper?: number;
  lower?: number;
  active: string[];
  activeClassName?: string;
};

const TOCItem: React.FC<TOCItemProps> = ({
  item,
  upper = item.depth,
  lower = item.depth,
  active,
  activeClassName = 'data-[active=true]:text-primary',
}) => {
  const offset = getLineOffset(item.depth),
    upperOffset = getLineOffset(upper),
    lowerOffset = getLineOffset(lower);
  const isActive = active.includes(item.url.slice(1));

  return (
    <a
      href={item.url}
      data-active={isActive}
      style={{ paddingInlineStart: getItemOffset(item.depth) }}
      className={cn(
        'prose text-muted-foreground relative py-1.5 text-sm [overflow-wrap:anywhere] transition-colors first:pt-0 last:pb-0',
        activeClassName,
      )}
    >
      {offset !== upperOffset ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          className='absolute start-0 -top-1.5 size-4 rtl:-scale-x-100'
        >
          <line
            x1={upperOffset}
            y1='0'
            x2={offset}
            y2='12'
            className='stroke-foreground/10'
            strokeWidth='1'
          />
        </svg>
      ) : null}
      <div
        className={cn(
          'bg-foreground/10 absolute inset-y-0 w-px',
          offset !== upperOffset && 'top-1.5',
          offset !== lowerOffset && 'bottom-1.5',
        )}
        style={{ insetInlineStart: offset }}
      />
      {item.title}
    </a>
  );
};

// --- TOC items container ---

const TOCItems: React.FC<{
  items: TOCItemType[];
  thumbClassName?: string;
  activeClassName?: string;
}> = ({ items, thumbClassName, activeClassName }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const active = useActiveAnchors(items);

  const [svg, setSvg] = React.useState<{
    path: string;
    width: number;
    height: number;
  }>();

  React.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    function onResize(): void {
      if (container.clientHeight === 0) return;
      let w = 0,
        h = 0;
      const d: string[] = [];
      for (let i = 0; i < items.length; i++) {
        const element: HTMLElement | null = container.querySelector(
          `a[href="${items[i]!.url}"]`,
        );
        if (!element) continue;
        const styles = getComputedStyle(element);
        const offset = getLineOffset(items[i]!.depth) + 1,
          top = element.offsetTop + parseFloat(styles.paddingTop),
          bottom =
            element.offsetTop +
            element.clientHeight -
            parseFloat(styles.paddingBottom);
        w = Math.max(offset, w);
        h = Math.max(h, bottom);
        d.push(`${i === 0 ? 'M' : 'L'}${offset} ${top}`);
        d.push(`L${offset} ${bottom}`);
      }
      setSvg({ path: d.join(' '), width: w + 1, height: h });
    }

    const observer = new ResizeObserver(onResize);
    onResize();
    observer.observe(container);
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      {svg ? (
        <div
          className='absolute start-0 top-0 rtl:-scale-x-100'
          style={{
            width: svg.width,
            height: svg.height,
            maskImage: `url("data:image/svg+xml,${encodeURIComponent(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`,
            )}")`,
          }}
        >
          <TocThumb
            containerRef={containerRef}
            active={active}
            className={cn(
              'mt-(--fd-top) h-(--fd-height) transition-all',
              thumbClassName ?? 'bg-primary',
            )}
          />
        </div>
      ) : null}
      <div className='flex flex-col' ref={containerRef}>
        {items.map((item, i) => (
          <TOCItem
            key={item.url}
            item={item}
            upper={items[i - 1]?.depth}
            lower={items[i + 1]?.depth}
            active={active}
            activeClassName={activeClassName}
          />
        ))}
      </div>
    </>
  );
};

// --- Public component ---

export type TableOfContentsProps = {
  className?: string;
  items: TOCItemType[];
  headingClassName?: string;
  thumbClassName?: string;
  activeClassName?: string;
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  className,
  items,
  headingClassName,
  thumbClassName,
  activeClassName,
}) => {
  const viewRef = React.useRef<HTMLDivElement>(null);

  return (
    <nav
      ref={viewRef}
      aria-label='Table of contents'
      className={cn(
        'hidden shrink-0 md:sticky md:top-16 md:block md:self-start',
        className,
      )}
    >
      <h3
        className={cn(
          'inline-flex items-center gap-2',
          headingClassName ?? 'text-primary',
        )}
      >
        <Text className='size-4' /> On This Page
      </h3>
      <TOCItems
        items={items}
        thumbClassName={thumbClassName}
        activeClassName={activeClassName}
      />
    </nav>
  );
};
