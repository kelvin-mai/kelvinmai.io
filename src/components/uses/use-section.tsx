import React from 'react';

import { UseItem } from './use-item';

interface Props {
  title: string;
  tools: any[];
}

export const UseSection: React.FC<Props> = ({ title, tools }) => (
  <section className='w-11/12 mx-auto pb-8'>
    <h2 className='text-2xl pb-4'>{title}</h2>
    <ul className='list-disc list-inside'>
      {tools.map(tool => (
        <UseItem key={tool.id} {...tool} />
      ))}
    </ul>
  </section>
);
