import Link from 'next/link';
import Image from 'next/image';

import me from '@app/public/images/me.jpg';
import { ThemeSelect } from '../common';

export const Navbar = () => {
  return (
    <nav className='shadow-md dark:bg-waikawa-950'>
      <div className='container flex items-center justify-between py-2'>
        <Link href='/'>
          <div className='overflow-hidden rounded-full shadow-md'>
            <Image
              src={me}
              width={50}
              height={50}
              alt='Avatar picture of me'
              placeholder='blur'
            />
          </div>
        </Link>
        <div>
          <ThemeSelect />
        </div>
      </div>
    </nav>
  );
};
