'use client';

import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { useClipboard } from '@/registry/default/hooks/use-clipboard';

export default function Demo() {
  const [copy, copied] = useClipboard();

  return (
    <Button
      className='gap-2 text-sm'
      onClick={() =>
        copy('Hello world').then(() =>
          toast('Text Copied to your clipboard 🎉.'),
        )
      }
    >
      Click me to copy
      {copied ? <ClipboardCheckIcon size={10} /> : <ClipboardIcon size={10} />}
    </Button>
  );
}
