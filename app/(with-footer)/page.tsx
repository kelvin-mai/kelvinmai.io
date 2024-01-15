import {
  AboutCard,
  WorkExperience,
  FreelanceExperience,
} from '@app/components/about';
import { BuyMeCofffeeBanner } from '@app/components/common';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@app/components/ui';
import { resume } from '@app/constants';

export default function HomePage() {
  return (
    <>
      <main
        className={`bg-[url('/images/bg.webp')] bg-fixed bg-top bg-no-repeat py-4 dark:bg-waikawa-700`}
      >
        <div className='container'>
          <AboutCard summary={resume.basics.summary} />
          <div className='my-4 flex w-full justify-center'>
            <BuyMeCofffeeBanner />
          </div>
        </div>
      </main>
      <section className='from-waikawa-700 to-waikawa-950 py-4 dark:bg-gradient-to-b'>
        <div className='container'>
          <Tabs defaultValue='employment'>
            <TabsList>
              <TabsTrigger value='employment'>Employment</TabsTrigger>
              <TabsTrigger value='freelance'>Freelance</TabsTrigger>
            </TabsList>
            <TabsContent value='employment'>
              <WorkExperience jobs={resume.work} />
            </TabsContent>
            <TabsContent value='freelance'>
              <FreelanceExperience />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
