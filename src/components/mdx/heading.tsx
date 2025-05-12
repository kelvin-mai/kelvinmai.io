import * as React from 'react';
import { Link } from 'lucide-react';

import { cn } from '@/lib/utils';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingProps = React.ComponentProps<HeadingType> & {
  as?: HeadingType;
};

const headingClasses: { [key in HeadingType]: string } = {
  h1: 'mt-2 text-4xl font-bold',
  h2: 'mt-8 border-b pb-2 text-xl font-semibold first:mt-0 w-full',
  h3: 'mt-8 pb-2 text-lg font-semibold',
  h4: 'mt-8 text-lg font-semibold',
  h5: 'mt-8 text-lg font-semibold',
  h6: 'mt-8 text-lg font-semibold',
};

export const Heading: React.FC<HeadingProps> = ({
  as,
  className,
  ...props
}) => {
  const Comp = as ?? 'h1';
  if (!props.id) {
    return <Comp className={cn(className)} {...props} />;
  }
  return (
    <Comp
      className={cn(
        'inline-flex scroll-m-20 items-center gap-2 tracking-tight',
        headingClasses[as ?? 'h1'],
        className,
      )}
      {...props}
    >
      <a href={`#${props.id}`} className='peer'>
        {props.children}
      </a>
      <Link
        className='text-muted-foreground size-3.5 shrink-0 opacity-0 transition-opacity peer-hover:opacity-100'
        aria-label='Link to section'
      />
    </Comp>
  );
};
