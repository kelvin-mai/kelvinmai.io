import * as React from 'react';
import { highlight, Inline, Pre, type RawCode } from 'codehike/code';

import { CopyButton } from '@/components/ui/copy-button';
import { cn } from '@/lib/utils';

type CodeProps = { codeblock: RawCode; className?: string };

export const InlineCode: React.FC<CodeProps> = async ({
  className,
  codeblock,
}) => {
  const highlighted = await highlight(codeblock, 'github-dark');
  return (
    <Inline
      className={cn('rounded-lg px-2 py-1', className)}
      code={highlighted}
      style={highlighted.style}
    />
  );
};

export const Code: React.FC<CodeProps> = async ({ className, codeblock }) => {
  const highlighted = await highlight(codeblock, 'github-dark');
  return (
    <div className={cn('relative my-4', className)}>
      <CopyButton className='absolute top-1 right-2' value={highlighted.code} />
      {codeblock.meta && (
        <div className='flex items-center justify-center rounded-t-lg bg-neutral-800 py-1 text-neutral-400 hover:text-neutral-200'>
          {codeblock.meta}
        </div>
      )}
      <Pre
        className={cn('p-2', codeblock.meta ? 'rounded-b-lg' : 'rounded-lg')}
        code={highlighted}
        style={highlighted.style}
      />
    </div>
  );
};
