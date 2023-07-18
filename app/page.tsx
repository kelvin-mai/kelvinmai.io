'use client';
import dynamic from 'next/dynamic';

import { Button, buttonClassName } from '@app/components/common';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFDownloadLink),
  {
    ssr: false,
    loading: () => (
      <Button className='bg-dracula-purple text-dracula-white' disabled>
        Download Resume
      </Button>
    ),
  },
);

import { AboutSection, Resume, SocialLinks } from '@app/components';

export default function () {
  return (
    <>
      <main
        className={`flex min-h-[80vh] flex-col items-center justify-center bg-dracula-black bg-[url('/images/bg.jpg')] bg-fixed bg-bottom bg-no-repeat lg:min-h-[720px] lg:bg-top`}
      >
        <div className='container flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-400 bg-opacity-10 bg-clip-padding px-4 py-16 drop-shadow backdrop-blur-sm backdrop-filter'>
          <h1 className='text-5xl font-bold tracking-tight text-white sm:text-[5rem]'>
            Kelvin Mai
          </h1>
          <p className='text-2xl font-bold tracking-tight text-dracula-purple sm:text-[2rem]'>
            Software Engineer
          </p>
          <SocialLinks className='flex justify-around text-dracula-white' />
          <PDFDownloadLink
            className={`${buttonClassName} bg-dracula-purple text-dracula-white shine`}
            fileName='KelvinMaiResume.pdf'
            document={<Resume />}
          >
            Download Resume
          </PDFDownloadLink>
        </div>
      </main>
      <AboutSection />
    </>
  );
}
