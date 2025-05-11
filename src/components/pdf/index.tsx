'use client';
import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

import { Button } from '../ui/button';
import { Font } from '@react-pdf/renderer';

// https://github.com/wojtekmaj/react-pdf#import-worker-recommended
// Unnecessary for now because of not dynamically changing pdf in realtime
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

Font.register({
  family: 'Ubuntu',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 400,
      src: 'https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgo6eA.ttf',
    },
    {
      fontStyle: 'italic',
      fontWeight: 400,
      src: 'https://fonts.gstatic.com/s/ubuntu/v20/4iCu6KVjbNBYlgoKeg7z.ttf',
    },
    {
      fontStyle: 'normal',
      fontWeight: 700,
      src: 'https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvTtw.ttf',
    },
  ],
});

Font.register({
  family: 'Geist',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 400,
      src: 'https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4nQ.ttf',
    },
    {
      fontStyle: 'normal',
      fontWeight: 700,
      src: 'https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4nQ.ttf',
    },
  ],
});

export { ResumeDocument } from './resume/document';

export const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFViewer),
  { ssr: false, loading: () => <>Loading...</> },
);

export const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFDownloadLink),
  {
    ssr: false,
    loading: () => (
      <Button variant='home' disabled>
        <Loader2 className='animate-spin' />
        Loading...
      </Button>
    ),
  },
);
