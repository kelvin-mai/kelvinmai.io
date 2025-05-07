'use client';

import * as React from 'react';

import { ColorPicker } from '@/registry/default/ui/color-picker';

export default function ColorPickerDemo() {
  const [color, setColor] = React.useState('#d946ef');
  return (
    <div className='bg-card text-card-foreground rounded-lg border shadow-sm'>
      <div className='flex flex-col space-y-1.5 p-6'>
        <div className='text-2xl leading-none font-semibold tracking-tight'>
          Current Color
        </div>
        <div
          className='h-8 w-full rounded-md border'
          style={{ backgroundColor: color }}
        />
      </div>
      <div className='flex items-center justify-center p-6 pt-0'>
        <ColorPicker value={color} onChange={setColor} />
      </div>
    </div>
  );
}
