import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';

export const FloatingLabel: React.FC<React.ComponentProps<typeof Label>> = ({
  className,
  ...props
}) => {
  return (
    <Label
      className={cn(
        'peer-has-focus:secondary bg-background absolute start-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4',
        className,
      )}
      {...props}
    />
  );
};

export const FloatingInput: React.FC<
  React.ComponentProps<'input'> & {
    label: string;
  }
> = ({ id, label, className, ...props }) => {
  return (
    <div className='relative'>
      <Input
        id={id}
        className={cn('peer bg-background', className)}
        placeholder=' '
        {...props}
      />
      <FloatingLabel htmlFor={id}>{label}</FloatingLabel>
    </div>
  );
};
