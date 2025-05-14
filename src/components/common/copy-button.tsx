'use client';

import * as React from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { toast } from 'sonner';

import { cn, copyToClipboardWithMeta } from '@/lib/utils';
import { Button } from '../ui/button';

type CopyButtonProps = Omit<React.ComponentProps<typeof Button>, 'value'> & {
  value: string;
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

  const handleCopy = () => {
    copyToClipboardWithMeta(value);
    setCopied(true);
    toast('Code copied to clipboard.');
  };

  return (
    <Button
      size='icon'
      variant='ghost'
      className={cn(
        'z-10 size-6 rounded-md bg-zinc-800 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50',
        className,
      )}
      onClick={handleCopy}
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
