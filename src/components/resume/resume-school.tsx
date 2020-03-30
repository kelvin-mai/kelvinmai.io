import React from 'react';

interface Props {
  institution: string;
  location: string;
  area: string;
  startDate: string;
  endDate: string;
}

export const ResumeSchool: React.FC<Props> = ({
  institution,
  location,
  area,
  startDate,
  endDate,
}) => (
  <div className='mt-1'>
    <div className='flex justify-between font-bold'>
      <p>{institution}</p>
      <p>{location}</p>
    </div>
    <div className='flex justify-between'>
      <p>
        <i>{area}</i>
      </p>
      <p>
        {startDate} - {endDate ? endDate : 'Present'}
      </p>
    </div>
  </div>
);
