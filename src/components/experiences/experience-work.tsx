import React from 'react';

interface Props {
  company: string;
  title: string;
  location: string;
  date: string;
  description: string;
  points: string[];
}

export const ExperienceWork: React.FC<Props> = ({
  company,
  title,
  location,
  date,
  description,
  points,
}) => (
  <li className='pb-4'>
    <h3 className='text-lg font-bold'>{company}</h3>
    <p className='font-bold'>{title}</p>
    <div className='flex justify-between'>
      <p>{location}</p>
      <p>{date}</p>
    </div>
    <p>{description}</p>
    <ul className='list-disc list-inside'>
      {points.map(point => (
        <li>{point}</li>
      ))}
    </ul>
  </li>
);
