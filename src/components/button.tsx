import React from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?(): void;
}

export const Button: React.FC<Props> = ({ children, className, onClick }) => (
  <motion.button
    whileHover={{ y: -2 }}
    className={classnames(
      'block w-auto mx-auto py-2 px-4 my-4 bg-dark hover:bg-dark-purple text-white text-sm rounded uppercase hover:shadow-lg',
      className
    )}
    onClick={onClick && onClick}
  >
    {children}
  </motion.button>
);
