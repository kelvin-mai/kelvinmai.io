import React, { ComponentPropsWithoutRef } from 'react';
import { Link } from 'lucide-react';

import { cn } from '@/lib/utils';

const createId = (children: React.ReactNode): string => {
  if (typeof children === 'string') {
    return children
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');
  }
  return '';
};

export const H1: React.FC<ComponentPropsWithoutRef<'h1'>> = ({
  className,
  children,
  ...props
}) => {
  const id = createId(children);
  return (
    <h1
      id={id}
      className={cn('mt-2 scroll-m-20 text-4xl font-bold', className)}
      {...props}
    >
      <a className='peer' href={`#${id}`}>
        {children}
      </a>
    </h1>
  );
};

export const H2: React.FC<ComponentPropsWithoutRef<'h2'>> = ({
  className,
  children,
  ...props
}) => {
  const id = createId(children);
  return (
    <h2
      id={id}
      className={cn(
        'mt-8 inline-flex w-full scroll-m-20 items-center gap-2 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    >
      <a className='peer' href={`#${id}`}>
        {children}
      </a>
      <Link className='text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity peer-hover:opacity-100' />
    </h2>
  );
};

export const H3: React.FC<ComponentPropsWithoutRef<'h3'>> = ({
  className,
  children,
  ...props
}) => {
  const id = createId(children);
  return (
    <h3
      id={id}
      className={cn(
        'mt-8 inline-flex w-full scroll-m-20 gap-2 pb-2 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      <a href={`#${id}`}>{children}</a>
      <Link className='text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity peer-hover:opacity-100' />
    </h3>
  );
};

export const H4: React.FC<ComponentPropsWithoutRef<'h4'>> = ({
  className,
  children,
  ...props
}) => {
  const id = createId(children);
  return (
    <h4
      id={id}
      className={cn(
        'mt-8 inline-flex w-full scroll-m-20 gap-2 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      <a href={`#${id}`}>{children}</a>
      <Link className='text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity peer-hover:opacity-100' />
    </h4>
  );
};

export const H5: React.FC<ComponentPropsWithoutRef<'h5'>> = ({
  className,
  children,
  ...props
}) => {
  const id = createId(children);
  return (
    <h5
      id={id}
      className={cn(
        'mt-8 inline-flex w-full scroll-m-20 gap-2 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      <a href={`#${id}`}>{children}</a>
      <Link className='text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity peer-hover:opacity-100' />
    </h5>
  );
};

export const H6: React.FC<ComponentPropsWithoutRef<'h6'>> = ({
  className,
  children,
  ...props
}) => {
  const id = createId(children);
  return (
    <h6
      id={id}
      className={cn(
        'mt-9 inline-flex w-full scroll-m-20 gap-2 text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    >
      <a href={`#${id}`}>{children}</a>
      <Link className='text-muted-foreground size-3 shrink-0 opacity-0 transition-opacity peer-hover:opacity-100' />
    </h6>
  );
};

export const P: React.FC<ComponentPropsWithoutRef<'p'>> = ({ ...props }) => {
  return <p className='leading-6 [&:not(:first-child)]:mt-6' {...props} />;
};

export const Blockquote: React.FC<ComponentPropsWithoutRef<'blockquote'>> = ({
  ...props
}) => {
  return <blockquote className='mt-6 border-l-2 pl-6 italic' {...props} />;
};

export const UnorderedList: React.FC<ComponentPropsWithoutRef<'ul'>> = ({
  ...props
}) => {
  return <ul className='my-6 ml-6 list-disc [&>li]:mt-2' {...props} />;
};

export const OrderedList: React.FC<ComponentPropsWithoutRef<'ol'>> = ({
  ...props
}) => {
  return <ol className='my-6 ml-6 list-decimal [&>li]:mt-2' {...props} />;
};
