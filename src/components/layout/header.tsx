import React from 'react';
import { Link } from 'gatsby';
import { Nav } from './nav';
import { tw } from '../../utils/tailwind';

export const Header = () => {
  return (
    <header className='fixed w-full z-50'>
      <div
        className={tw({ md: 'mt-4 bg-none shadow-none' }, 'bg-black shadow-md')}
      >
        <Link
          to='/'
          className={tw(
            { md: 'hidden' },
            'block text-lg text-center pt-2 font-bold uppercase'
          )}
        >
          Kelvin Mai
        </Link>
        <Nav />
      </div>
    </header>
  );
};
