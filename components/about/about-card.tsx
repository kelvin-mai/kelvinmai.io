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
        'flex flex-col gap-4 drop-shadow md:flex-row lg:grid lg:grid-cols-1 lg:grid-cols-[1fr_2fr]',
        className,
      )}
    >
      <div className='m-auto w-[200px] overflow-hidden rounded-full drop-shadow-md md:m-0 md:hidden'>
        <Image
          src={me}
          width={200}
          height={200}
          alt='Avatar picture of me'
          placeholder='blur'
        />
      </div>
      <div className='hidden overflow-hidden rounded-lg drop-shadow-md md:block'>
        <Image
          src={meAbout}
          width={1203}
          height={1504}
          alt='Full picture of me'
          placeholder='blur'
        />
      </div>
      <div className='to-bg-waikawa-950/40 flex flex-col justify-between rounded-lg bg-gradient-to-br from-perfume-500 p-4 text-slate-50 drop-shadow-md'>
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
    </div>
  );
};
