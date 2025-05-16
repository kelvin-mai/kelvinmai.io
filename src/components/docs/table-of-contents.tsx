// Thanks to fumadocs ui https://github.com/fuma-nama/fumadocs/blob/dev/packages/ui/src/components/layout/toc-clerk.tsx
'use client';

import * as React from 'react';
import * as Base from 'fumadocs-core/toc';
import type { TOCItemType } from 'fumadocs-core/server';
import { useEffectEvent } from 'fumadocs-core/utils/use-effect-event';
import { useOnChange } from 'fumadocs-core/utils/use-on-change';
import { Text } from 'lucide-react';

import { cn } from '@/lib/utils';

type TOCThumb = [top: number, height: number];

const getItemOffset = (depth: number): number => {
  if (depth <= 2) return 14;
  if (depth === 3) return 26;
  return 36;
};

const getLineOffset = (depth: number): number => {
  return depth >= 3 ? 10 : 0;
};

const calc = (container: HTMLElement, active: string[]): TOCThumb => {
  if (active.length === 0 || container.clientHeight === 0) {
    return [0, 0];
  }

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

const update = (element: HTMLElement, info: TOCThumb): void => {
  element.style.setProperty('--fd-top', `${info[0]}px`);
  element.style.setProperty('--fd-height', `${info[1]}px`);
};

type TocThumbProps = React.ComponentProps<'div'> & {
  containerRef: React.RefObject<HTMLElement | null>;
};

const TocThumb: React.FC<TocThumbProps> = ({ containerRef, ...props }) => {
  const active = Base.useActiveAnchors();
  const thumbRef = React.useRef<HTMLDivElement>(null);

  const onResize = useEffectEvent(() => {
    if (!containerRef.current || !thumbRef.current) return;

    update(thumbRef.current, calc(containerRef.current, active));
  });

  React.useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    onResize();
    const observer = new ResizeObserver(onResize);
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [containerRef, onResize]);

  useOnChange(active, () => {
    if (!containerRef.current || !thumbRef.current) return;

    update(thumbRef.current, calc(containerRef.current, active));
  });

  return <div ref={thumbRef} role='none' {...props} />;
};

type TOCItemProps = {
  item: TOCItemType;
  upper?: number;
  lower?: number;
};

const TOCItem: React.FC<TOCItemProps> = ({
  item,
  upper = item.depth,
  lower = item.depth,
}) => {
  const offset = getLineOffset(item.depth),
    upperOffset = getLineOffset(upper),
    lowerOffset = getLineOffset(lower);

  return (
    <Base.TOCItem
      href={item.url}
      style={{
        paddingInlineStart: getItemOffset(item.depth),
      }}
      className='prose text-muted-foreground data-[active=true]:text-primary relative py-1.5 text-sm [overflow-wrap:anywhere] transition-colors first:pt-0 last:pb-0'
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
        style={{
          insetInlineStart: offset,
        }}
      />
      {item.title}
    </Base.TOCItem>
  );
};

const TOCItems: React.FC<{ items: TOCItemType[] }> = ({ items }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

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
          `a[href="#${items[i]!.url.slice(1)}"]`,
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

      setSvg({
        path: d.join(' '),
        width: w + 1,
        height: h,
      });
    }

    const observer = new ResizeObserver(onResize);
    onResize();

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [items]);

  return (
    <>
      {svg ? (
        <div
          className='absolute start-0 top-0 rtl:-scale-x-100'
          style={{
            width: svg.width,
            height: svg.height,
            maskImage: `url("data:image/svg+xml,${
              // Inline SVG
              encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`,
              )
            }")`,
          }}
        >
          <TocThumb
            containerRef={containerRef}
            className='bg-primary mt-(--fd-top) h-(--fd-height) transition-all'
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
          />
        ))}
      </div>
    </>
  );
};

export type TableOfContentsProps = {
  className?: string;
  items: TOCItemType[];
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  className,
  items,
}) => {
  const viewRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={viewRef}
      className={cn(
        'hidden shrink-0 md:sticky md:top-16 md:block md:self-start',
        className,
      )}
    >
      <h3 className='text-primary inline-flex items-center gap-2'>
        <Text className='size-4' /> On This Page
      </h3>
      <Base.ScrollProvider containerRef={viewRef}>
        <TOCItems items={items} />
      </Base.ScrollProvider>
    </div>
  );
};
