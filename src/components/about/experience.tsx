import Image from 'next/image';

import { type Resume } from '@/lib/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Calendar, MapPin } from 'lucide-react';
import { renderDates } from '@/lib/utils';
import { Badge } from '../ui/badge';

type ExperienceProps = {
  work: Resume['work'][0];
};

export const ExperienceTrigger: React.FC<ExperienceProps> = ({ work }) => {
  return (
    <>
      <div className='flex'>
        <Image
          src={`/images/jobs/${work.image}`}
          className='mr-4 w-12'
          height={48}
          width={48}
          alt={`${work.name} logo`}
        />
        <div className='text-left'>
          <h2 className='text-lg font-bold'>{work.name}</h2>
          <h3>{work.position}</h3>
        </div>
      </div>
    </>
  );
};

export const ExperienceContent: React.FC<ExperienceProps> = ({ work }) => {
  return (
    <>
      <div className='mb-2 flex gap-2'>
        <MapPin className='h-4 w-4' />
        <p>
          {work.location} - {work.locationType ? work.locationType : 'On-Site'}
        </p>
        <Calendar className='h-4 w-4' />
        <p>{renderDates(work.startDate, work.endDate)}</p>
      </div>
      <p>{work.summary}</p>
      <div className='flex flex-wrap items-center gap-2'>
        {work.skills.map((s) => (
          <Badge
            key={s}
            className='bg-neutral-800 font-semibold text-neutral-200 hover:bg-neutral-700 hover:text-neutral-50'
          >
            {s}
          </Badge>
        ))}
      </div>
      <ul className='list-inside list-disc text-sm'>
        {work.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </>
  );
};

type ExperiencesProps = {
  className?: string;
  jobs: Resume['work'];
};

export const Experiences: React.FC<ExperiencesProps> = ({
  className,
  jobs,
}) => {
  return (
    <Accordion className={className} type='multiple'>
      {jobs.map((j) => (
        <AccordionItem key={j.name} value={j.name} className='border-b-0'>
          <AccordionTrigger
            className='hover:cursor-pointer hover:no-underline'
            hideTrigger
          >
            <ExperienceTrigger work={j} />
          </AccordionTrigger>
          <AccordionContent className='space-y-2 px-2'>
            <ExperienceContent work={j} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
