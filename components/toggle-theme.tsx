'use client';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Suspense } from 'react';

export const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Suspense fallback={<Button disabled>Toggle Theme</Button>}>
      <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </Button>
    </Suspense>
  );
};
