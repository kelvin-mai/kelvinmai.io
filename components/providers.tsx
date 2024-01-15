'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { TooltipProvider } from './ui';

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <NextThemesProvider attribute='class' defaultTheme='light' enableSystem>
      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
    </NextThemesProvider>
  );
};
