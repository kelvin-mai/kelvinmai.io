'use client';

import * as React from 'react';

import { useInterval } from '@/registry/default/hooks/use-interval';

export default function UseIntervalDemo() {
  const colors = [
    '#7081d0',
    '#04d1f9',
    '#37f499',
    '#f7c67f',
    '#f265b5',
    '#a48cf2',
    '#f16c75',
    '#f1fc79',
  ];
  const [index, setIndex] = React.useState(0);

  useInterval(() => setIndex((index) => index + 1), 1000);

  const color = colors[index % colors.length];

  return (
    <div
      className='size-48 rounded-xl transition-all duration-300 ease-in'
      style={{
        background: color,
      }}
    />
  );
}
