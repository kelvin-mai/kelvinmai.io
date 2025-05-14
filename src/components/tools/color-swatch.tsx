'use client';

import * as React from 'react';
import { toast } from 'sonner';

import { tailwindColors } from '@/lib/constants';
import { copyToClipboardWithMeta } from '@/lib/utils';

export type ColorSwatchProps = {
  colors: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
};

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ colors }) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  const handleCopy = (value: string) => {
    copyToClipboardWithMeta(value);
    setCopied(true);
    toast(
      <span className='inline-flex items-center gap-2'>
        <div
          className='size-4 rounded p-2'
          style={{ backgroundColor: value }}
        />
        <p>Color copied to clipboard.</p>
      </span>,
    );
  };

  return (
    <div className='relative flex flex-col space-y-1 overflow-hidden rounded-lg md:flex-row md:space-y-0 md:space-x-1'>
      {Object.entries(colors).map(([key, value]) => (
        <button
          key={key}
          className='relative flex h-14 w-full flex-col justify-center rounded-lg p-2 md:h-20 md:py-4'
          style={{
            backgroundColor: value,
          }}
          onClick={() => handleCopy(value)}
        >
          <div
            className={
              'flex cursor-pointer items-center justify-between truncate px-4 md:mt-auto md:block md:px-0'
            }
          >
            <div
              style={{
                color: Number(key) >= 500 ? colors[50] : colors[950],
              }}
            >
              <div className='text-center text-xs font-medium lg:text-sm'>
                {key}
              </div>
              <div className='block text-center text-sm uppercase opacity-50 md:hidden lg:block'>
                {value}
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export const TailwindColorSwatches = () => {
  return (
    <div className='py-4'>
      {Object.entries(tailwindColors).map(([name, colors]) => (
        <div key={name}>
          <h2 className='mb-2 text-xl font-semibold capitalize'>{name}</h2>
          <ColorSwatch colors={colors} />
        </div>
      ))}
    </div>
  );
};
