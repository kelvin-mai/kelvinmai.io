import React from 'react';

import { ExternalLink } from '../external-link';

interface Props {
  title: string;
  description: string;
  date: string;
  link: string;
}

export const ResumeProject: React.FC<Props> = ({
  link,
  title,
  date,
  description,
}) => (
  <div className='mt-2'>
    <div className='flex justify-between font-bold'>
      <p>
        <ExternalLink href={link}>{title}</ExternalLink>
      </p>
      <p>{date}</p>
    </div>
    <p>{description}</p>
  </div>
);
