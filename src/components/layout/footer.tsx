import Link from 'next/link';

import { resume } from '@/lib/constants';
import { SocialLinks } from '@/components/about';

export const Footer: React.FC = () => {
  return (
    <footer className='container'>
      <div className='mb-4 rounded-lg bg-neutral-900 p-4 text-neutral-200'>
        <div className='grid grid-cols-3'>
          <div>
            <h4 className='mb-4 text-xl font-bold tracking-tight'>
              {resume.basics.name}
            </h4>
            <p className='text-left text-sm text-neutral-400'>
              Built by{' '}
              <a
                className='underline underline-offset-4'
                href='https://github.com/kelvin-mai'
              >
                kelvin-mai
              </a>
              . The soure code is availble on{' '}
              <a
                className='underline underline-offset-4'
                href='https://github.com/kelvin-mai/kelvinmai.io'
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div>
            <h4 className='mb-4 text-lg font-bold tracking-tight'>
              Quick Links
            </h4>
            <ul className='space-y-2'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/resume'>Resume</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='mb-4 text-lg font-bold tracking-tight'>Connect</h4>
            <SocialLinks />
          </div>
        </div>
        <div className='pt-4 text-left text-sm text-neutral-400'>
          © {new Date().getFullYear()} Kelvin Mai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
