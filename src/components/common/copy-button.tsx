'use client';

import * as React from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

type CopyButtonProps = Omit<React.ComponentProps<typeof Button>, 'value'> & {
  value: string;
};

const copyToClipboardWithMeta = async (value: string) => {
  navigator.clipboard.writeText(value);
};

export const CopyButton: React.FC<CopyButtonProps> = ({
  value,
  className,
  ...props
}) => {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  return (
    <Button
      size='icon'
      variant='ghost'
      className={cn(
        'z-10 size-6 rounded-md bg-zinc-800 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
        className,
      )}
      onClick={() => {
        copyToClipboardWithMeta(value);
        setCopied(true);
      }}
      {...props}
    >
      {copied ? (
        <CheckIcon className='size-3' />
      ) : (
        <CopyIcon className='size-3' />
      )}
      <span className='sr-only'>Copy</span>
    </Button>
  );
};
