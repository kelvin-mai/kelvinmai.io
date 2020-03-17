import React from 'react';

export interface Props {
  description: string;
}

export const BlueScreen: React.FC<Props> = ({ description, children }) => (
  <div className='z-50 absolute top-0 left-0 h-screen w-full bg-blue text-white'>
    <div className='absolute absolute-center'>
      <h1 className='text-6xl sm:text-8xl'>:(</h1>
      <p className='text-2xl sm:text-4xl'>{description}</p>
      <div className='mt-8'>{children}</div>
    </div>
  </div>
);
