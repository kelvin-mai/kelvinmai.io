'use client';
import dynamic from 'next/dynamic';

import { resume } from '@app/constants';
import { Resume } from '@app/components/resume';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFViewer),
  {
    ssr: false,
    loading: () => <div className='min-h-screen w-full bg-black'></div>,
  },
);

export default function () {
  return (
    <PDFViewer showToolbar={true} className='min-h-screen w-full'>
      <Resume resume={resume} />
    </PDFViewer>
  );
}
