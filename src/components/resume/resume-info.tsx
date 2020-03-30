import React from 'react';

import { ExternalLink } from '../external-link';

interface Props {
  email: string;
  label: string;
  name: string;
  summary: string;
  url: string;
  location: {
    city: string;
    countryCode: string;
    region: string;
  };
}

export const ResumeInfo: React.FC<Props> = ({
  email,
  label,
  name,
  summary,
  url,
  location,
}) => (
  <>
    <div className='flex justify-between items-end'>
      <h2 className='text-xl font-bold text-dark-purple'>{name}</h2>
      <h3 className='text-md font-bold uppercase text-dark-purple'>{label}</h3>
    </div>
    <div className='flex justify-between'>
      <ExternalLink href={url}>{url}</ExternalLink>
      {' | '}
      <ExternalLink href={`mailto:${email}`}>{email}</ExternalLink>
      {' | '}
      <p>
        {location.city}, {location.region} {location.countryCode}
      </p>
    </div>
  </>
);
