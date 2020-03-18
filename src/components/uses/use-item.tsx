import React from 'react';
import { ExternalLink } from '../external-link';

interface Props {
  link: string;
  title: string;
  description: string;
}

export const UseItem: React.FC<Props> = ({ link, title, description }) => (
  <li>
    <ExternalLink className='text-cyan hover:text-pink' href={link}>
      {title}
    </ExternalLink>
    {` - ${description}`}
  </li>
);
