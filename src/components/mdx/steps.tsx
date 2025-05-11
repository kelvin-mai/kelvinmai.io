import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';
import { H3 } from './typography';

export const Steps: React.FC<ComponentPropsWithoutRef<'div'>> = ({
  ...props
}) => (
  <div
    className='prose-h3:text-wrap md:ml-3.5 md:border-l md:pl-7.5'
    {...props}
  />
);

export const Step: React.FC<ComponentPropsWithoutRef<'h3'>> = ({
  className,
  children,
  ...props
}) => (
  <H3 className={cn('relative', className)} {...props}>
    <span className='bg-border absolute top-0 -left-8 block h-full w-[6px] rounded-tr-full rounded-br-full' />
    {children}
  </H3>
);
