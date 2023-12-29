import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';

import { resume } from '@app/constants';
import { cn } from '@app/lib/utils';
import { SocialLinks } from '@app/components/social-links';
import { Button } from '@app/components/ui/button';
import { ResumeDownloadLink } from '../resume';

type Resume = typeof resume;

type AboutCardProps = {
  className?: string;
  summary: Resume['basics']['summary'];
};

export const AboutCard: React.FC<AboutCardProps> = ({ className, summary }) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center rounded-xl px-4 py-8 drop-shadow md:flex-row',
        className,
      )}
    >
      <div className='w-[200px] overflow-hidden rounded-full md:hidden'>
        <Image
          src='/images/me.jpg'
          width={200}
          height={200}
          alt='Avatar picture of me'
        />
      </div>
      <div className='hidden w-1/3 overflow-hidden rounded-md md:block'>
        <Image
          src='/images/me-about.jpeg'
          width={1203}
          height={1504}
          alt='Full picture of me'
        />
      </div>
      <div className='md:ml-4 md:w-2/3'>
        <h1 className='text-center text-5xl font-bold tracking-tight md:text-[4rem]'>
          Kelvin Mai
        </h1>
        <p className='text-center text-2xl font-bold tracking-tight md:text-[2rem]'>
          Software Engineer
        </p>
        <p className='my-4'>{summary}</p>
        <SocialLinks className='flex justify-around' />
        <div className='mt-4 grid w-full justify-items-center md:justify-items-end'>
          {/* <Link href='/resume'>
            <Button>
              <Download className='mr-4 h-4 w-4' />
              View Resume
            </Button>
          </Link> */}
          <ResumeDownloadLink />
        </div>
      </div>
    </div>
  );
};
