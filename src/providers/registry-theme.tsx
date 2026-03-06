'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

type RegistryTheme = 'light' | 'dark' | 'system';

interface RegistryThemeContextValue {
  theme: RegistryTheme;
  setTheme: (theme: RegistryTheme) => void;
}

export const RegistryThemeContext =
  React.createContext<RegistryThemeContextValue | null>(null);

export const useRegistryTheme = () => React.useContext(RegistryThemeContext);

export const RegistryThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { resolvedTheme } = useTheme();
  const [theme, setThemeState] = React.useState<RegistryTheme>('system');
  const [mounted, setMounted] = React.useState(false);

  // Keep a ref to the latest global resolved theme for the cleanup function
  const resolvedThemeRef = React.useRef(resolvedTheme);
  React.useEffect(() => {
    resolvedThemeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  React.useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(
      'registry-theme',
    ) as RegistryTheme | null;
    if (stored) setThemeState(stored);
  }, []);

  // Apply registry theme to <html> whenever it changes
  React.useEffect(() => {
    if (!mounted) return;
    const systemDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    const isDark = theme === 'dark' || (theme === 'system' && systemDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, [theme, mounted]);

  // On unmount (navigating away from registry), restore the global theme
  React.useEffect(() => {
    return () => {
      document.documentElement.classList.toggle(
        'dark',
        resolvedThemeRef.current === 'dark',
      );
    };
  }, []);

  const setTheme = (t: RegistryTheme) => {
    setThemeState(t);
    localStorage.setItem('registry-theme', t);
  };

  return (
    <RegistryThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </RegistryThemeContext.Provider>
  );
};
