import Link from 'next/link';

import { resume, yearsSinceStart } from '@/lib/constants';
import { BuyMeCofffeeBanner } from '@/components/common';
import {
  AnimatedHomeCard,
  ContactForm,
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
              className='bg-card text-card-foreground flex grow flex-col justify-between space-y-2 rounded-lg p-4'
              delay={2}
            >
              <h3 className='text-center text-2xl font-semibold'>
                Personal Registry
              </h3>
              <p className='text-muted-foreground'>
                Get started with the Kelvin Mai&apos;s personal{' '}
                <a
                  href='https://ui.shadcn.com/docs/registry'
                  className='underline underline-offset-4'
                >
                  shadcn/ui
                </a>{' '}
                registry. Featuring multiple useful components, hooks and tools.
              </p>
              <Button asChild>
                <Link href='/registry'>Get Started</Link>
              </Button>
            </AnimatedHomeCard>
            <AnimatedHomeCard className='text-center' delay={3}>
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
        <section>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
