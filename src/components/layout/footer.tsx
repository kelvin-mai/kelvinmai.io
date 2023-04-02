import Link from 'next/link';
import { siGmail } from 'simple-icons';

import { Icon, SocialLinks } from '@app/components/common';

export const Footer = () => {
  return (
    <footer className='bg-black pt-8 text-white'>
      <section className='font-mono container flex flex-col justify-between font-bold uppercase md:flex-row'>
        <ul className='text-center font-normal capitalize md:text-left'>
          {/* {pages.nodes.map(({ id, to, name }) => (
            <li key={id} className='hover:text-pink'>
              <Link to={to}>{name}</Link>
            </li>
          ))} */}
        </ul>
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
      <p className='p-2 text-center'>© {new Date().getFullYear()} Kelvin Mai</p>
    </footer>
  );
};
