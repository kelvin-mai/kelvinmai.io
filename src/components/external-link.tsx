import React from 'react';

interface Props {
  href: string;
}

export const ExternalLink: React.FC<Props> = ({ href, children }) => (
  <a
    href={href}
    className='text-dark-purple hover:text-pink'
    target='_blank'
    rel='noopener noreferrer'
  >
    {children}
  </a>
);
