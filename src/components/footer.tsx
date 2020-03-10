import React from 'react';

export const Footer = () => (
  <footer className='h-40 bg-black text-white flex flex-col'>
    <h4 className='text-center mt-8'>
      © {new Date().getFullYear()} All rights reserved | made with{' '}
      <a href='https://www.gatsbyjs.org'>Gatsby</a>{' '}
    </h4>
  </footer>
);
