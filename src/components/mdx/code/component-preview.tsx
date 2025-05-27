import * as React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Index } from '@/__registry__/index';
import { Code } from './code';
import { OpenInV0Button } from '../../common/v0-button';
import { ComponentPreviewContent } from './component-preview.client';
import { CollapsibleCode } from './code.client';

type ComponentPreviewProps = React.ComponentPropsWithoutRef<'div'> & {
  name: string;
  v0Url?: string;
};

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  className,
  name,
  v0Url,
  ...props
}) => {
  return (
    <div className={cn('my-6', className)} {...props}>
      <Tabs defaultValue='preview'>
        <TabsList>
          <TabsTrigger value='preview'>Preview</TabsTrigger>
          <TabsTrigger value='code'>Code</TabsTrigger>
        </TabsList>
        <TabsContent value='preview'>
          <div className='bg-primary/0.75 rounded-lg border bg-[image:radial-gradient(var(--pattern-primary)_1px,transparent_0)] bg-[size:10px_10px] bg-center p-4 [--pattern-primary:var(--color-primary)]/10'>
            {v0Url && (
              <div className='flex justify-end'>
                <OpenInV0Button url={v0Url} />
              </div>
            )}
            <div className='flex min-h-80 items-center justify-center'>
              <React.Suspense
                fallback={
                  <div className='text-muted-foreground flex items-center justify-center text-sm'>
                    Loading...
                  </div>
                }
              >
                <ComponentPreviewContent name={name} />
              </React.Suspense>
            </div>
          </div>
        </TabsContent>
        <TabsContent value='code'>
          <CollapsibleCode>
            <Code
              className='my-0'
              codeblock={{ value: Index[name].source, lang: 'tsx', meta: '' }}
            />
          </CollapsibleCode>
        </TabsContent>
      </Tabs>
    </div>
  );
};
