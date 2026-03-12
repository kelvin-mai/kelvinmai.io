'use client';

import { Download } from 'lucide-react';

import { resume } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { PDFDownloadLink, ResumeDocument, ATSResumeDocument } from '.';

export function ResumeActions() {
  return (
    <div className='flex gap-4'>
      <PDFDownloadLink
        document={<ResumeDocument resume={resume} />}
        fileName='kelvin-mai-resume.pdf'
        className='flex-1 sm:flex-none'
      >
        {({ loading }) => (
          <Button
            variant='home'
            disabled={loading}
            className='w-full sm:w-auto'
          >
            <Download />
            {loading ? 'Loading...' : 'Download'}
          </Button>
        )}
      </PDFDownloadLink>
      <PDFDownloadLink
        document={<ATSResumeDocument resume={resume} />}
        fileName='kelvin-mai-resume-ats.pdf'
        className='flex-1 sm:flex-none'
      >
        {({ loading }) => (
          <Button
            variant='secondary'
            disabled={loading}
            className='w-full sm:w-auto'
          >
            <Download />
            {loading ? 'Loading...' : 'ATS Version'}
          </Button>
        )}
      </PDFDownloadLink>
    </div>
  );
}
