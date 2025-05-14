import * as React from 'react';
import { ThemeProvider } from 'next-themes';
import { NextProvider } from 'fumadocs-core/framework/next';

import { Toaster } from '@/components/ui/sonner';

export const RootProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <NextProvider>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
        <Toaster />
      </ThemeProvider>
    </NextProvider>
  );
};
