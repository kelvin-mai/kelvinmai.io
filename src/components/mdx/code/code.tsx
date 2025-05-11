import * as React from 'react';
import {
  highlight,
  Inline,
  Pre as CodehikePre,
  type RawCode,
} from 'codehike/code';

import { CopyButton } from '@/components/common/copy-button';
import { cn } from '@/lib/utils';
import { wordWrap } from './annotations/wrap-word';
import { eldritch } from './themes';

type CodeProps = { codeblock: RawCode; className?: string };

export const InlineCode: React.FC<CodeProps> = async ({
  className,
  codeblock,
}) => {
  const highlighted = await highlight(codeblock, eldritch);
  return (
    <Inline
      className={cn('rounded-lg px-2 py-1', className)}
      code={highlighted}
      style={highlighted.style}
    />
  );
};

export const Code: React.FC<CodeProps> = async ({ className, codeblock }) => {
  const highlighted = await highlight(codeblock, eldritch);
  return (
    <div className={cn('relative my-4 font-mono', className)}>
      <CopyButton className='absolute top-1 right-2' value={highlighted.code} />
      {codeblock.meta && (
        <div className='flex items-center justify-center rounded-t-lg bg-neutral-800 py-1 text-neutral-400 hover:text-neutral-200'>
          {codeblock.meta}
        </div>
      )}
      <CodehikePre
        className={cn(
          'overflow-x-auto p-2 font-mono',
          codeblock.meta ? 'rounded-b-lg' : 'rounded-lg',
        )}
        code={highlighted}
        style={highlighted.style}
        handlers={[wordWrap]}
      />
    </div>
  );
};

export const Pre: React.FC<CodeProps> = async ({ className, codeblock }) => {
  const highlighted = await highlight(codeblock, eldritch);
  return (
    <CodehikePre
      className={cn('font-mono', className)}
      code={highlighted}
      style={highlighted.style}
    />
  );
};
