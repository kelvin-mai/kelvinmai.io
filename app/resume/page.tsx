'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

import { Resume } from '@app/components/resume';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFViewer),
  { ssr: false },
);

export default function PDF() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <PDFViewer showToolbar={true} className='min-h-screen w-full'>
      <Resume />
    </PDFViewer>
  );
}
