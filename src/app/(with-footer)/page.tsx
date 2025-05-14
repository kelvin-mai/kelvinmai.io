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
import { AnimatedHomeCard } from '@/components/about/animated-home-card';

export default function Home() {
  return (
    <>
      <div className='bg-mesh-gradient-eldritch fixed -z-10 min-h-screen w-full overflow-hidden' />
      <main className='container space-y-4 py-4'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
          <section className='flex flex-col space-y-4 md:col-span-2'>
            <HeroSection />
            <AnimatedHomeCard overrideClassName delay={2}>
              <BuyMeCofffeeBanner />
            </AnimatedHomeCard>
          </section>
          <section className='flex flex-col gap-4'>
            <AnimatedHomeCard delay={3}>
              <div className='text-2xl text-cyan-500'>{yearsSinceStart()}+</div>
              <div className='text-md font-semibold tracking-tight'>
                Years of experience
              </div>
            </AnimatedHomeCard>
            <AnimatedHomeCard
              className='flex grow flex-col justify-between space-y-2 rounded-lg bg-gradient-to-br from-white to-rose-200 p-4 text-neutral-900'
              delay={2}
            >
              <h3 className='text-center text-2xl font-semibold'>
                Get In Touch
              </h3>
              <p className='text-neutral-600'>
                I&apos;m currently open to freelance opportunities and
                interesting projects. Feel free to reach out if you&apos;d like
                to collaborate or just a friendly hello.
              </p>
              <Button variant='home' asChild>
                <a href='mailto:kelvin.mai002@gmail.com' className='text-white'>
                  <Mail />
                  Contact Me
                </a>
              </Button>
            </AnimatedHomeCard>
            <AnimatedHomeCard delay={3}>
              <h3 className='text-2xl font-bold'>Connect</h3>
              <SocialLinks />
            </AnimatedHomeCard>
          </section>
        </div>
        <section className='flex flex-col-reverse gap-4 md:flex-col'>
          <AnimatedHomeCard delay={4}>
            <Skills />
          </AnimatedHomeCard>
          <AnimatedHomeCard delay={5}>
            <Experiences jobs={resume.work} />
          </AnimatedHomeCard>
        </section>
      </main>
    </>
  );
}
