import React from 'react';
import { ExternalLink } from '../external-link';

interface Props {
  link: string;
  title: string;
  date: string;
  description: string;
}

export const ExperienceProject: React.FC<Props> = ({
  link,
  title,
  date,
  description,
}) => (
  <li className='pb-4'>
    <div className='flex justify-between'>
      <h3 className='text-lg font-bold'>
        <ExternalLink href={link}>{title}</ExternalLink>
      </h3>
      <p>{date}</p>
    </div>
    <p>{description}</p>
  </li>
);
