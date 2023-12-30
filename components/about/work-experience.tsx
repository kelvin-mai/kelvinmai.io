'use client';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';

import { resume } from '@app/constants';
import { renderDates } from '@app/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@app/components/ui/accordion';

type Resume = typeof resume;

type WorkExperienceProps = {
  jobs: Resume['work'];
};

export const WorkExperience: React.FC<WorkExperienceProps> = ({ jobs }) => {
  return (
    <Accordion
      type='multiple'
      className='my-4 w-full px-4 sm:rounded-xl sm:bg-white sm:drop-shadow sm:dark:bg-waikawa-50/10'
    >
      {jobs.map((j) => {
        return (
          <AccordionItem key={j.name} value={j.name}>
            <AccordionTrigger>
              <div className='flex'>
                <div className='mr-4 w-12'>
                  <Image
                    src={`/images/jobs/${j.image}`}
                    height={48}
                    width={48}
                    alt={`${j.name} logo`}
                  />
                </div>
                <div className='text-left'>
                  <h2 className='text-lg font-bold'>{j.name}</h2>
                  <h3>{j.position}</h3>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className='mb-2 hidden flex-row items-center text-sm sm:flex'>
                <MapPin className='mr-2 h-4 w-4' />
                <p>
                  {j.location} - {j.locationType ? j.locationType : 'On-Site'}
                </p>
                <Calendar className='mx-2 h-4 w-4' />
                <p className='flex items-center'>
                  {renderDates(j.startDate, j.endDate)}
                </p>
              </div>
              <p className='mb-2'>{j.summary}</p>
              <div className='flex flex-wrap items-center'>
                {j.skills.map((skill) => (
                  <p
                    key={skill}
                    className='m-1 rounded bg-waikawa-800 px-2 text-slate-50 dark:bg-waikawa-950'
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <ul className='list-inside list-disc text-sm'>
                {j.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
