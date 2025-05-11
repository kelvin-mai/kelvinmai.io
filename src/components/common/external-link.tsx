import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export const ExternalLink: React.FC<React.ComponentPropsWithoutRef<'a'>> = ({
  href,
  className,
  children,
  ...props
}) => {
  const defaultClass = 'font-medium';
  if (href?.startsWith('/')) {
    return (
      <Link href={href} className={cn(defaultClass, className)} {...props}>
        {children}
      </Link>
    );
  }
  if (href?.startsWith('#')) {
    return (
      <a href={href} className={cn(defaultClass, className)} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(defaultClass, className)}
      {...props}
    >
      {children}
    </a>
  );
};
