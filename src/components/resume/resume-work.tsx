import React from 'react';

interface Props {
  company: string;
  location: string;
  title: string;
  date: string;
  description: string;
  points: string[];
}

export const ResumeWork: React.FC<Props> = ({
  company,
  location,
  title,
  date,
  description,
  points,
}) => (
  <div className='mt-1'>
    <div className='flex justify-between font-bold'>
      <p>{company}</p>
      <p>{location}</p>
    </div>
    <div className='flex justify-between'>
      <p>
        <i>{title}</i>
      </p>
      <p>{date}</p>
    </div>
    <p className='mt-1'>{description}</p>
    <ul className='list-disc list-inside'>
      {points.map(p => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </div>
);
