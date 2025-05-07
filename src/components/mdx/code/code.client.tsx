'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

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
