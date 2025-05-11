'use client';

import React, { type JSX, useEffect, useState } from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

const ThemeOption = ({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}) => {
  return (
    <button
      className={cn(
        'relative flex size-8 cursor-default items-center justify-center rounded-full transition-all [&_svg]:size-4',
        isActive
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground',
      )}
      role='radio'
      aria-checked={isActive}
      aria-label={`Switch to ${value} theme`}
      onClick={() => onClick(value)}
    >
      {icon}

      {isActive && (
        <motion.div
          layoutId='theme-option'
          transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
          className='border-border absolute inset-0 rounded-full border'
        />
      )}
    </button>
  );
};

const THEME_OPTIONS = [
  {
    icon: <Monitor />,
    value: 'system',
  },
  {
    icon: <Sun />,
    value: 'light',
  },
  {
    icon: <Moon />,
    value: 'dark',
  },
];

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className='flex h-8 w-24' />;
  }

  return (
    <motion.div
      key={String(isMounted)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className='bg-background inline-flex items-center overflow-hidden rounded-full border'
      role='radiogroup'
    >
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </motion.div>
  );
};

export { ThemeSwitch };
