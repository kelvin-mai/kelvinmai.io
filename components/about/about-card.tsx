import Image from 'next/image';
import Link from 'next/link';
import { FileHeart } from 'lucide-react';

import me from '@app/public/images/me.jpg';
import meAbout from '@app/public/images/me-about.jpeg';
import { resume } from '@app/constants';
import { cn } from '@app/lib/utils';
import { SocialLinks } from '@app/components/social-links';
import { ResumeDownloadLink } from '../resume';
import { Button } from '../ui';

type Resume = typeof resume;

type AboutCardProps = {
  className?: string;
  summary: Resume['basics']['summary'];
};

export const AboutCard: React.FC<AboutCardProps> = ({ className, summary }) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 shadow md:flex-row lg:grid lg:grid-cols-1 lg:grid-cols-[2fr_1fr]',
        className,
      )}
    >
      <div className='m-auto w-[200px] overflow-hidden rounded-full shadow-md md:m-0 md:hidden'>
        <Image src={me} alt='Avatar picture of me' placeholder='blur' />
      </div>
      <div className='to-bg-waikawa-950/40 rounoed-lg flex flex-col justify-between bg-gradient-to-br from-perfume-500 p-4 text-slate-50 shadow-md'>
        <div>
          <h1 className='text-center text-5xl font-bold tracking-tight md:text-[4rem]'>
            Kelvin Mai
          </h1>
          <p className='text-center text-2xl font-bold tracking-tight md:text-[2rem]'>
            Software Engineer
          </p>
        </div>
        <p className='py-4 font-medium'>{summary}</p>
        <div>
          <SocialLinks className='flex justify-around' />
          <div className='mt-4 flex w-full justify-center lg:justify-end'>
            <Link href='/resume'>
              <Button className='mr-4'>
                <FileHeart className='mr-4 h-4 w-4' />
                View Resume
              </Button>
            </Link>
            <ResumeDownloadLink />
          </div>
        </div>
      </div>
      <div className='hidden overflow-hidden rounded-lg shadow-md md:block'>
        <Image src={meAbout} alt='Full picture of me' placeholder='blur' />
      </div>
    </div>
  );
};
