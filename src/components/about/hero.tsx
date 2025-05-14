import Image from 'next/image';
import Link from 'next/link';
import { Download, FileHeart } from 'lucide-react';

import { resume } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { PDFDownloadLink, ResumeDocument } from '../pdf';
import { AnimatedHomeCard } from './animated-home-card';

export const HeroSection = () => {
  return (
    <AnimatedHomeCard>
      <Image
        className='overflow-hidden rounded-full'
        alt='profile'
        src='/images/me.jpg'
        height={100}
        width={100}
      />
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>
          {resume.basics.name}
        </h1>
        <p className='text-2xl font-bold tracking-tight'>
          {resume.basics.label}
        </p>
        <p className='font-medium'>{resume.basics.summary}</p>
      </div>
      <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
        <Button variant='home' asChild>
          <Link href='/resume'>
            <FileHeart />
            View Resume
          </Link>
        </Button>
        <Button variant='home' asChild>
          <PDFDownloadLink document={<ResumeDocument resume={resume} />}>
            <Download />
            Download Resume
          </PDFDownloadLink>
        </Button>
      </div>
    </AnimatedHomeCard>
  );
};
