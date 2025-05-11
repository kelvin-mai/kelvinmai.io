'use client';

import * as React from 'react';
import { Paintbrush } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { ColorPicker } from '@/registry/default/ui/color-picker';

export default function ColorPickerDemo() {
  const [color, setColor] = React.useState<string>('');

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' className={cn(!color && 'text-slate-500')}>
          <div className='flex w-full items-center gap-2'>
            {color ? (
              <div
                className={cn(
                  'size-4 rounded border !bg-cover !bg-center transition-all',
                )}
                style={{ background: color }}
              />
            ) : (
              <Paintbrush className='size-4' />
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-60 space-y-2'>
        <ColorPicker value={color} onChange={setColor} />
      </PopoverContent>
    </Popover>
  );
}
