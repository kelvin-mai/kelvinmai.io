'use client';
import dynamic from 'next/dynamic';
import { Download } from 'lucide-react';

import { Resume } from './resume';
import { Button } from '../ui';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFDownloadLink),
  {
    ssr: false,
    loading: () => (
      <Button disabled>
        <Download className='mr-4 h-4 w-4' />
        Download Resume
      </Button>
    ),
  },
);

export const ResumeDownloadLink = () => {
  return (
    <PDFDownloadLink document={<Resume />} fileName='KelvinMaiResume.pdf'>
      <Button>
        <Download className='mr-4 h-4 w-4' />
        Download Resume
      </Button>
    </PDFDownloadLink>
  );
};
