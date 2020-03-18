import React from 'react';

interface Props {
  school: string;
  location: string;
  title: string;
  date: string;
}

export const ResumeSchool: React.FC<Props> = ({
  school,
  location,
  title,
  date,
}) => (
  <div className='mt-1'>
    <div className='flex justify-between font-bold'>
      <p>{school}</p>
      <p>{location}</p>
    </div>
    <div className='flex justify-between'>
      <p>
        <i>{title}</i>
      </p>
      <p>{date}</p>
    </div>
  </div>
);
