'use client';

import * as React from 'react';
import {
  highlight,
  type RawCode,
  Pre,
  type HighlightedCode,
} from 'codehike/code';

import { CopyButton } from '@/components/common';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { wordWrap } from './annotations/wrap-word';
import { eldritch } from './themes';

type CollapsibleCodeProps = React.HTMLAttributes<HTMLDivElement> & {
  collapseText?: string;
  expandText?: string;
};

export const CollapsibleCode: React.FC<CollapsibleCodeProps> = ({
  collapseText = 'Collapse',
  expandText = 'Expand',
  className,
  children,
  ...props
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div
        className={cn('relative overflow-hidden rounded-lg', className)}
        {...props}
      >
        <CollapsibleContent
          forceMount
          className={cn('overflow-hidden', !open && 'max-h-80')}
        >
          <div
            className={cn(
              '[&_pre]:max-h-[650px] [&_pre]:pb-[50px]',
              !open ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto',
            )}
          >
            {children}
          </div>
        </CollapsibleContent>
        <div
          className={cn(
            'absolute flex items-center justify-center bg-gradient-to-b from-black/10 to-black/80 p-2',
            open ? 'inset-x-0 bottom-0 h-12' : 'inset-0',
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant='secondary' className='h-8 text-sm'>
              {open ? collapseText : expandText}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
};

type CodeProps = { codeblock: RawCode; className?: string };

export const DynamicCode: React.FC<CodeProps> = ({ className, codeblock }) => {
  const [highlighted, setHighlighted] = React.useState<
    HighlightedCode | undefined
  >();
  const updateHighlighted = async () => {
    const highlighted = await highlight(codeblock, eldritch);
    setHighlighted(highlighted);
  };
  React.useEffect(() => {
    updateHighlighted();
  }, [codeblock]);
  return highlighted ? (
    <div className={cn('relative my-4 font-mono', className)}>
      <CopyButton className='absolute top-1 right-2' value={highlighted.code} />
      {codeblock.meta && (
        <div className='flex items-center justify-center rounded-t-lg bg-neutral-800 py-1 text-neutral-400 hover:text-neutral-200'>
          {codeblock.meta}
        </div>
      )}
      <Pre
        className={cn(
          'overflow-x-auto p-2 font-mono',
          codeblock.meta ? 'rounded-b-lg' : 'rounded-lg',
        )}
        code={highlighted}
        style={highlighted.style}
        handlers={[wordWrap]}
      />
    </div>
  ) : (
    <Skeleton className='h-50' />
  );
};
