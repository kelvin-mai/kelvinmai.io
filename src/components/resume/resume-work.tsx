import React from 'react';

interface Props {
  name: string;
  location: string;
  position: string;
  startDate: string;
  endDate?: string;
  summary: string;
  highlights: string[];
}

export const ResumeWork: React.FC<Props> = ({
  name,
  position,
  summary,
  location,
  startDate,
  endDate,
  highlights,
}) => (
  <div className='mt-1'>
    <div className='flex justify-between font-bold'>
      <p>{name}</p>
      <p>{location}</p>
    </div>
    <div className='flex justify-between'>
      <p>
        <i>{position}</i>
      </p>
      <p>
        {startDate} - {endDate ? endDate : 'Present'}
      </p>
    </div>
    <p className='mt-1'>{summary}</p>
    <ul className='list-disc list-inside'>
      {highlights.map(h => (
        <li key={h}>{h}</li>
      ))}
    </ul>
  </div>
);
