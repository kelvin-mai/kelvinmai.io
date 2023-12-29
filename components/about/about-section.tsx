import Image from 'next/image';

import { ExperienceCard } from './experience';
import { resume } from '@app/constants';

export const AboutSection = () => {
  return (
    <>
      <section className='text-slate flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-waikawa-700 to-waikawa-950 py-12 text-white'>
        <h2 className='mb-4 text-3xl font-bold'>About Me</h2>
        <p className='mb-4 p-4 text-xl'>{resume.basics.summary}</p>
        <div className='container flex flex-col items-center justify-between pb-20 pt-8 md:flex-row-reverse'>
          <div className='w-1/2 overflow-hidden rounded-full md:rounded-md'>
            <Image
              src='/images/me-about.jpeg'
              width={1203}
              height={1504}
              alt='picture of me'
            />
          </div>
          <div className='mr-4 w-full'>
            <h3 className='mb-4 text-center text-xl font-bold'>
              Professional Experience
            </h3>
            <div className='grid grid-cols-1 gap-4'>
              {resume.work.map(ExperienceCard)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
