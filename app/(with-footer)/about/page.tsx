import { AboutCard, ExperienceAccordion } from '@app/components/about';
import { BuyMeCofffeeBanner } from '@app/components/common/buy-me-coffee-banner';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@app/components/ui';
import { ToggleThemeButton } from '@app/components/toggle-theme';
import { resume } from '@app/constants';

export default function AboutPage() {
  return (
    <>
      <main
        className={`bg-[url('/images/bg.webp')] bg-fixed bg-top bg-no-repeat p-4 dark:bg-waikawa-700 lg:min-h-[720px]`}
      >
        <div className='container'>
          <AboutCard summary={resume.basics.summary} />
          <div className='my-4 flex w-full justify-center'>
            {/* <ToggleThemeButton /> */}
            <BuyMeCofffeeBanner />
          </div>
        </div>
      </main>
      <section className='from-waikawa-700 to-waikawa-950 p-4 dark:bg-gradient-to-b'>
        <div className='container'>
          {/* <Tabs defaultValue='experience'>
            <TabsList>
              <TabsTrigger value='experience'>
                Professional Experience
              </TabsTrigger>
              <TabsTrigger value='content'>Content</TabsTrigger>
            </TabsList>
            <TabsContent value='experience'>
              <div className='my-4 sm:rounded-xl sm:bg-white sm:drop-shadow sm:dark:bg-waikawa-50/10'>
                <ExperienceAccordion jobs={resume.work} />
              </div>
            </TabsContent>
            <TabsContent value='content'>Under Construction</TabsContent>
          </Tabs> */}
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
