import React from 'react';

interface Props {
  title: string;
}

export const ResumeSection: React.FC<Props> = ({ title, children }) => (
  <section className='mt-2'>
    <h3 className='text-dark-purple text-base'>{title}</h3>
    <hr />
    {children}
  </section>
);
