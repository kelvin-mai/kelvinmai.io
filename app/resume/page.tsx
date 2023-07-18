'use client';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

import { Resume } from '@app/components';

const PDFViewer = dynamic(
  () => import('@react-pdf/renderer').then((m) => m.PDFViewer),
  { ssr: false },
);

export default function () {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <PDFViewer showToolbar={true} className='w-full min-h-screen'>
      <Resume />
    </PDFViewer>
  );
}
