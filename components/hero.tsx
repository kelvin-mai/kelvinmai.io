import Image from 'next/image';

import { SocialLinks } from './social-links';
import { ResumeDownloadLink } from './resume';

export const Hero = () => {
  return (
    <main
      className={`relative flex min-h-[80vh] flex-col items-center justify-center bg-waikawa-950 lg:min-h-[720px]`}
    >
      <Image
        layout='fill'
        className='pointer-events-none object-cover object-center'
        src='/images/bg.jpg'
        alt=''
      />
      <div className='container flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-400 bg-opacity-10 bg-clip-padding px-4 py-16 drop-shadow backdrop-blur-sm backdrop-filter'>
        <h1 className='text-5xl font-bold tracking-tight text-white sm:text-[5rem]'>
          Kelvin Mai
        </h1>
        <p className='text-2xl font-bold tracking-tight text-perfume-400 sm:text-[2rem]'>
          Software Engineer
        </p>
        <SocialLinks className='flex justify-around text-white' />
        <ResumeDownloadLink />
      </div>
    </main>
  );
};
