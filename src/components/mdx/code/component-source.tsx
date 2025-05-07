import { Index } from '@/__registry__';

import { Code } from './code';
import { CollapsibleCode } from './code.client';
import { cn } from '@/lib/utils';

export const ComponentSource: React.FC<
  React.ComponentPropsWithoutRef<'div'> & {
    name: string;
    src?: string;
    title?: string;
  }
> = ({ className, name, title }) => {
  const value = Index[name]?.files[0].content;
  if (!value) {
    return null;
  }
  const codeblock = { value, lang: 'tsx', meta: title || '' };
  return (
    <CollapsibleCode className={cn('my-4', className)}>
      <Code className='my-0' codeblock={codeblock} />
    </CollapsibleCode>
  );
};
