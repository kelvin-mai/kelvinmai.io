import { SimpleIcon } from 'simple-icons';

export interface IconProps {
  icon: SimpleIcon;
  size?: number;
}

// tailwindcss comment for dynamic hover colors
// 'hover:fill-[#FF0000] hover:fill-[#1DA1F2] hover:fill-[#E4405F] hover:fill-[#181717] hover:fill-[#FFDD00] hover:fill-[#0A66C2] hover:fill-[#EA4335]'

export const Icon: React.FC<IconProps> = ({
  icon: { path, title, hex },
  size = 24,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 ${size} ${size}`}
      height={size}
      width={size}
      className={`m-1 inline fill-current fill-current hover:fill-[#${hex}]`}
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
};
