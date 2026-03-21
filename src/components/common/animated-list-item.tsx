'use client';

import { motion } from 'motion/react';

type AnimatedListItemProps = React.PropsWithChildren<{
  index: number;
  className?: string;
}>;

export const AnimatedListItem: React.FC<AnimatedListItemProps> = ({
  index,
  className,
  children,
}) => {
  return (
    <motion.li
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', bounce: 0.3, delay: 0.15 * (index + 1) }}
    >
      {children}
    </motion.li>
  );
};
