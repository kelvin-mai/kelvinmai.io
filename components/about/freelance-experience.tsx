import { Mail } from 'lucide-react';

import { Button } from '../ui';
import { FreelanceCard } from '../freelance';
import { freelance } from '@app/constants/freelance';

export const FreelanceExperience = () => {
  return (
    <div className='grid gap-4 md:grid-cols-2'>
      <div className='grid gap-4 lg:grid-cols-2'>
        {freelance.map((f) => (
          <FreelanceCard {...f} />
        ))}
      </div>
      <div className='flex flex-col justify-around rounded-lg bg-white bg-gradient-to-br from-white to-rose-100 p-4 text-waikawa-950 shadow-md'>
        <h2 className='text-center text-2xl font-bold tracking-tight md:text-[2rem]'>
          Freelance Projects
        </h2>
        <p className='py-4 font-medium'>
          Want to work together? Feel free to reach out for collaborations or
          just a friendly hello.
        </p>
        <a href='mailto:me@kelvinmai.io'>
          <Button className='w-full'>
            <Mail className='mr-4 h-4 w-4' />
            Contact Me
          </Button>
        </a>
      </div>
    </div>
  );
};
