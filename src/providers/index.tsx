import * as React from 'react';
import { ThemeProvider } from 'next-themes';

import { Toaster } from '@/components/ui/sonner';

export const RootProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
      <Toaster />
    </ThemeProvider>
  );
};
