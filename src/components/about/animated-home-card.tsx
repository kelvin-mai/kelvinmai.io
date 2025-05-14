'use client';

import * as React from 'react';
import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

type AnimatedHomeCardProps = React.PropsWithChildren & {
  className?: string;
  overrideClassName?: boolean;
  delay?: number;
};

export const AnimatedHomeCard: React.FC<AnimatedHomeCardProps> = ({
  className,
  overrideClassName,
  children,
  delay = 1,
}) => {
  return (
    <motion.div
      className={cn(
        !overrideClassName && 'bg-glass space-y-2 rounded-lg p-4 shadow',
        className,
      )}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', bounce: 0.3, delay: 0.15 * delay }}
    >
      {children}
    </motion.div>
  );
};
