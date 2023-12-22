'use client';
import dynamic from 'next/dynamic';

import { Resume } from '@app/components/resume';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFViewer),
  {
    ssr: false,
    loading: () => (
      <div className='flex min-h-screen w-full items-center justify-center bg-white' />
    ),
  },
);

export default function PDF() {
  return (
    <PDFViewer showToolbar={true} className='min-h-screen w-full'>
      <Resume />
    </PDFViewer>
  );
}
