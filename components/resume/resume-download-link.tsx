'use client';
import dynamic from 'next/dynamic';
import { Download, Loader2 } from 'lucide-react';

import { Resume } from './resume';
import { Button } from '../ui';
import { resume } from '@app/constants';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFDownloadLink),
  {
    ssr: false,
    loading: () => (
      <Button disabled>
        <Loader2 className='mr-4 h-4 w-4 animate-spin' />
        Download Resume
      </Button>
    ),
  },
);

export const ResumeDownloadLink = () => {
  return (
    <PDFDownloadLink
      document={<Resume resume={resume} />}
      fileName='KelvinMaiResume.pdf'
    >
      {({ blob, url, loading, error }) => {
        return (
          <Button disabled={loading}>
            <Download className='mr-4 h-4 w-4' />
            Download Resume
          </Button>
        );
      }}
    </PDFDownloadLink>
  );
};
