'use client';

import * as React from 'react';
import { HexAlphaColorPicker, HexColorPicker } from 'react-colorful';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export type ColorPickerProps = Omit<
  React.ComponentProps<typeof Input>,
  'value' | 'onChange' | 'onBlur'
> & {
  value?: string;
  alpha?: boolean;
  onChange: (value: string) => void;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  className,
  value,
  alpha,
  onChange,
  ...props
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      {alpha ? (
        <HexAlphaColorPicker color={value} onChange={onChange} {...props} />
      ) : (
        <HexColorPicker color={value} onChange={onChange} {...props} />
      )}

      <Input
        id='custom'
        value={value}
        className={cn('bg-background dark:bg-background h-8 w-[200px]')}
        onChange={(e) => onChange(e.currentTarget.value)}
        {...props}
      />
    </div>
  );
};
ColorPicker.displayName = 'ColorPicker';
