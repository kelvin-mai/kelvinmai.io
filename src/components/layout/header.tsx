import React from 'react';
import { Link } from 'gatsby';

import { Nav } from './nav';

export const Header = () => {
  return (
    <header className='fixed w-full z-50'>
      <div className='bg-black shadow-md md:mt-4 md:bg-none md:shadow-none'>
        <Link
          to='/'
          className='block text-lg text-center pt-2 font-bold uppercase md:hidden'
        >
          Kelvin Mai
        </Link>
        <Nav />
      </div>
    </header>
  );
};
