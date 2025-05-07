'use client';
import * as React from 'react';

import { Index } from '@/__registry__/index';

export const ComponentPreviewContent: React.FC<{ name: string }> = ({
  name,
}) => {
  const Preview = React.useMemo(() => {
    const Component = Index[name]?.component;
    if (!Component) {
      return (
        <p className='text-muted-foreground text-sm'>
          Component {name} not found in registry.
        </p>
      );
    }
    return <Component />;
  }, [name]);
  return (
    <React.Suspense
      fallback={
        <div className='text-muted-foreground flex items-center justify-center text-sm'>
          Loading...
        </div>
      }
    >
      {Preview}
    </React.Suspense>
  );
};
