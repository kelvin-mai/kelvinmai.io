import { AboutCard } from '@app/components/about/about-card';
import { ExperienceAccordion } from '@app/components/about/experience-accordion';
import { BuyMeCofffeeBanner } from '@app/components/common/buy-me-coffee-banner';
import { resume } from '@app/constants';

export default function AboutPage() {
  return (
    <>
      <main className='container'>
        <AboutCard summary={resume.basics.summary} />
        <div className='my-4 flex w-full justify-center'>
          <BuyMeCofffeeBanner />
        </div>
      </main>
      <section className='container'>
        <h2 className='m-4 text-center text-xl font-bold'>
          Professional Experience
        </h2>
        <div className='my-4 sm:rounded-lg sm:border sm:drop-shadow'>
          <ExperienceAccordion jobs={resume.work} />
        </div>
      </section>
    </>
  );
}
