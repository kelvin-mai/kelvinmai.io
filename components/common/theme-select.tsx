'use client';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';

import { cn } from '@app/lib/utils';

export const ThemeSelect = () => {
  const { theme, setTheme } = useTheme();
  const createThemeClassname = (t: string) =>
    cn(
      'rounded-full p-1 transition-all hover:bg-slate-50 text-slate-800',
      t === theme && 'bg-slate-50',
    );
  return (
    <div className='flex items-center gap-2 rounded-full border border-slate-400 bg-slate-200 p-1'>
      <button
        className={createThemeClassname('light')}
        onClick={() => setTheme('light')}
      >
        <Sun className='h-4 w-4' />
      </button>
      <button
        className={createThemeClassname('system')}
        onClick={() => setTheme('system')}
      >
        <Monitor className='h-4 w-4' />
      </button>
      <button
        className={createThemeClassname('dark')}
        onClick={() => setTheme('dark')}
      >
        <Moon className='h-4 w-4' />
      </button>
    </div>
  );
};
