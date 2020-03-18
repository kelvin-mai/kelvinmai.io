import React from 'react';

interface Props {
  href: string;
  className?: string;
}

export const ExternalLink: React.FC<Props> = ({
  href,
  className = 'text-dark-purple hover:text-pink',
  children,
}) => (
  <a
    href={href}
    className={className}
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </a>
);
