import { siGmail } from 'simple-icons';

import { Icon } from '@app/components/common';

import { SocialLinks } from './social-links';

export const Footer = () => {
  return (
    <footer className='bg-dracula-black pt-8 text-white'>
      <section className='font-mono container flex flex-col justify-between pb-4 font-bold uppercase md:flex-row md:items-end'>
        <p className='p-2 text-center'>
          © {new Date().getFullYear()} Kelvin Mai
        </p>
        <div className='text-center'>
          <p className='pt-4 md:pt-0'>Contact</p>
          <a href='mailto:me@kelvinmai.io'>
            <Icon icon={siGmail} />
          </a>
        </div>
        <div className='text-center md:text-right'>
          <p className='hidden md:block'>Follow</p>
          <SocialLinks />
        </div>
      </section>
    </footer>
  );
};
