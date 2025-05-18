'use client';

import * as React from 'react';

import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export const OverflowTooltip: React.FC<
  React.ComponentProps<typeof TooltipContent>
> = ({ className, children, ...props }) => {
  const [overflowed, setOverflowed] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ref.current && ref.current?.scrollWidth > ref.current?.clientWidth) {
      setOverflowed(true);
    }
  }, []);
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className='truncate' ref={ref}>
            {children}
          </div>
        </TooltipTrigger>
        {overflowed && (
          <TooltipContent className={cn('text-sm', className)} {...props}>
            {children}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};
