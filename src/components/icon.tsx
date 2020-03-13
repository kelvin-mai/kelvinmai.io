import React from 'react';
import { SimpleIcon } from 'simple-icons';

export interface IconProps {
  icon: SimpleIcon;
  size?: number;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  icon: { path, title },
  size = 24,
  className = 'inline fill-current text-white hover:text-dark m-1',
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    height={size}
    width={size}
    className={className}
  >
    <title>{title}</title>
    <path d={path} />
  </svg>
);
