import React from 'react';
import { SimpleIcon } from 'simple-icons';

export interface Props {
  icon: SimpleIcon;
  size?: number;
  className?: string;
}

export type IconProps = Props;

export const Icon: React.FC<Props> = ({
  icon: { path, title, hex },
  size = 24,
  className = 'inline fill-current m-1',
}) => {
  const [fillColor, setFillColor] = React.useState('currentColor');
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      height={size}
      width={size}
      className={className}
      onMouseEnter={() => setFillColor(hex)}
      onMouseLeave={() => setFillColor('currentColor')}
      style={{ fill: fillColor }}
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
};
