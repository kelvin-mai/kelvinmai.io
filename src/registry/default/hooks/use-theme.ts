'use client';

import * as React from 'react';
import { useTheme as useNextTheme } from 'next-themes';

// !callout[/colorThemes/] Add your own theme names here
export const colorThemes = [
  'default',
  'bubblegum',
  'monochrome',
  'supabase',
  'twitter',
  'vercel',
] as const;

export type ColorTheme = (typeof colorThemes)[number];
export type Theme = 'system' | 'light' | 'dark';

export const useTheme = () => {
  const { setTheme, resolvedTheme } = useNextTheme();
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>('default');

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem('color-theme') as ColorTheme | null;
    if (saved) {
      setColorTheme(saved);
      document.documentElement.classList.add(`theme-${saved}`);
    }
  }, []);

  const updateColorTheme = React.useCallback((next: ColorTheme) => {
    if (typeof window === 'undefined') return;

    document.documentElement.classList.remove(
      ...colorThemes.map((c) => `theme-${c}`),
    );
    if (next !== 'default') {
      document.documentElement.classList.add(`theme-${next}`);
    }
    localStorage.setItem('color-theme', next);
    setColorTheme(next);
  }, []);

  return {
    setTheme,
    theme: resolvedTheme as Theme,
    colorTheme: colorTheme,
    setColorTheme: updateColorTheme,
  };
};
