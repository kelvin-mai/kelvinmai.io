import Link from 'next/link';
import { SocialLinks } from './social-links';

export const Hero = () => {
  return (
    <main
      className={`bg-dracula-black flex min-h-[80vh] flex-col items-center justify-center bg-[url('/images/bg.jpg')] bg-fixed bg-bottom bg-no-repeat lg:min-h-[720px] lg:bg-top`}
    >
      <div className='container flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-400 bg-opacity-10 bg-clip-padding px-4 py-16 drop-shadow backdrop-blur-sm backdrop-filter'>
        <h1 className='text-5xl font-bold tracking-tight text-white sm:text-[5rem]'>
          Kelvin Mai
        </h1>
        <p className='text-dracula-purple text-2xl font-bold tracking-tight sm:text-[2rem]'>
          Software Engineer
        </p>
        <SocialLinks className='text-dracula-white flex justify-around' />
        <Link
          className='shine bg-dracula-purple text-dracula-white rounded-md px-4 py-2 drop-shadow'
          href='/resume'
        >
          Download Resume
        </Link>
      </div>
    </main>
  );
};
