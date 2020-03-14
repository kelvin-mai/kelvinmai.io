import React from 'react';

export const Footer = () => (
  <footer className='bg-black text-white'>
    <h4 className='text-center pt-8 pb-2'>
      © {new Date().getFullYear()} Kelvin Mai | made with{' '}
      <a href='https://www.gatsbyjs.org'>Gatsby</a>{' '}
    </h4>
  </footer>
);
