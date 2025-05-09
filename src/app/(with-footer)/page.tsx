// TODO: background mesh gradient https://csshero.org/mesher/
import { Mail } from 'lucide-react';

import { resume, yearsSinceStart } from '@/lib/constants';
import { BuyMeCofffeeBanner } from '@/components/common';
import {
  HeroSection,
  Experiences,
  SocialLinks,
  Skills,
} from '@/components/about';
import { Button } from '@/components/ui';

export default function Home() {
  return (
    <>
      <div className='bg-mesh-gradient-eldritch fixed -z-10 min-h-screen w-full overflow-hidden' />
      <main className='container space-y-4 py-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <section className='flex flex-col space-y-4 md:col-span-2'>
            <HeroSection />
            <BuyMeCofffeeBanner />
          </section>
          <section className='flex flex-col gap-4'>
            <div className='bg-glass rounded-lg p-4 text-center shadow md:text-left'>
              <div className='text-2xl text-cyan-500'>{yearsSinceStart()}+</div>
              <div className='text-md font-semibold tracking-tight'>
                Years of experience
              </div>
            </div>
            <div className='flex grow flex-col justify-between space-y-2 rounded-lg bg-gradient-to-br from-white to-rose-200 p-4 text-neutral-900'>
              <h3 className='text-center text-2xl font-semibold'>
                Get In Touch
              </h3>
              <p className='text-neutral-600'>
                I'm currently open to freelance opportunities and interesting
                projects. Feel free to reach out if you'd like to collaborate or
                just a friendly hello.
              </p>
              <Button
                className='bg-violet-600 text-white shadow hover:bg-violet-500'
                asChild
              >
                <a href='mailto:kelvin.mai002@gmail.com'>
                  <Mail />
                  Contact Me
                </a>
              </Button>
            </div>
            <div className='bg-glass rounded-lg p-4 text-center shadow'>
              <h3 className='text-2xl font-bold'>Connect</h3>
              <SocialLinks />
            </div>
          </section>
        </div>
        <section className='flex flex-col-reverse gap-4 md:flex-col'>
          <Skills className='bg-glass rounded-lg p-4 shadow' />
          <Experiences
            className='bg-glass rounded-lg p-4 shadow'
            jobs={resume.work}
          />
        </section>
      </main>
    </>
  );
}
