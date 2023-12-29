import { AboutCard } from '@app/components/about/about-card';
import { ExperienceAccordion } from '@app/components/about/experience-accordion';
import { BuyMeCofffeeBanner } from '@app/components/common/buy-me-coffee-banner';
import { resume } from '@app/constants';

export default function HomePage() {
  return (
    <>
      <main
        className={`bg-[url('/images/bg.webp')] bg-fixed bg-top bg-no-repeat p-4 dark:bg-waikawa-700 lg:min-h-[720px]`}
      >
        <div className='container'>
          <AboutCard summary={resume.basics.summary} />
          <div className='my-4 flex w-full justify-center'>
            <BuyMeCofffeeBanner />
          </div>
        </div>
      </main>
      <section className='from-waikawa-700 to-waikawa-950 p-4 dark:bg-gradient-to-b'>
        <div className='container'>
          <h2 className='m-4 text-center text-xl font-bold'>
            Professional Experience
          </h2>
          <div className='my-4 sm:rounded-xl sm:bg-white sm:drop-shadow sm:dark:bg-waikawa-50/10'>
            <ExperienceAccordion jobs={resume.work} />
          </div>
        </div>
      </section>
    </>
  );
}
