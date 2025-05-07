'use client';

import * as React from 'react';
import { Paintbrush } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';

import { Button, type ButtonProps } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const PRESET_COLORS = [
  '#ffffff', // white
  '#f43f5e', // rose-500
  '#f59e0b', // amber-500
  '#84cc16', // lime-500
  '#06b6d4', // cyan-500
  '#6366f1', // indigo-500
  '#d946ef', // fuschia-500
  '#000000', // black
];

export type ColorPickerProps = Omit<
  ButtonProps,
  'value' | 'onChange' | 'onBlur'
> & {
  value?: string;
  options?: string[];
  onChange: (value: string) => void;
  onBlur?: () => void;
};

export const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  (
    {
      value,
      onChange,
      onBlur,
      name,
      options = PRESET_COLORS,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);

    return (
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild disabled={disabled} onBlur={onBlur}>
          <Button
            variant='outline'
            className={cn(!value && 'text-slate-500', className)}
            {...props}
          >
            <div className='flex w-full items-center gap-2'>
              {value ? (
                <div
                  className={cn(
                    'h-4 w-4 rounded border !bg-cover !bg-center transition-all',
                  )}
                  style={{ background: value }}
                />
              ) : (
                <Paintbrush className='h-4 w-4' />
              )}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-64'>
          <Tabs defaultValue='preset' className='w-full'>
            <TabsList className='mb-4 w-full'>
              <TabsTrigger className='flex-1' value='preset'>
                Presets
              </TabsTrigger>
              <TabsTrigger className='flex-1' value='picker'>
                Picker
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value='preset'
              className='mt-0 flex flex-wrap items-center justify-center gap-1'
            >
              {options.map((c) => (
                <div
                  key={c}
                  style={{ background: c }}
                  className='h-6 w-6 cursor-pointer rounded-md border active:scale-105'
                  onClick={() => onChange(c)}
                />
              ))}
            </TabsContent>

            <TabsContent value='picker' className='mt-0 flex justify-center'>
              <HexColorPicker color={value} onChange={onChange} />
            </TabsContent>
          </Tabs>

          <Input
            id='custom'
            value={value}
            ref={ref}
            className='col-span-2 mt-4 h-8'
            onChange={(e) => onChange(e.currentTarget.value)}
          />
        </PopoverContent>
      </Popover>
    );
  },
);
ColorPicker.displayName = 'ColorPicker';
