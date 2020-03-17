import React from 'react';
import icons from 'simple-icons';
import { SocialLinks } from '../social-links';
import { Icon } from '../icon';

export const Footer = () => (
  <footer className='bg-black text-white pt-4'>
    <div className='container flex justify-around'>
      <SocialLinks className='text-white' />
      <a href='mailto:kelvin.mai002@gmail.com'>
        <Icon icon={icons.get('Gmail')} />
      </a>
    </div>
    <p className='text-center p-2'>
      © {new Date().getFullYear()} Kelvin Mai | made with{' '}
      <a href='https://www.gatsbyjs.org'>Gatsby</a>{' '}
    </p>
  </footer>
);
