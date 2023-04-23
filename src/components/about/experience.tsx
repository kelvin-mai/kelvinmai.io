import Image from 'next/image';

import { type ResumeWork } from '@app/constants';

export interface ExperienceProps {
  work: ResumeWork[];
}

export const ExperienceCard: React.FC<{
  name: string;
  position: string;
  image: string;
  summary: string;
  highlights: string[];
}> = ({ name, position, image, summary, highlights }) => {
  return (
    <div
      key={name}
      className='rounded-xl bg-white/10 p-4 text-white shadow-md hover:bg-white/20'
    >
      <div className='flex'>
        <div className='w-12'>
          <Image
            src={`/images/jobs/${image}`}
            height={48}
            width={48}
            alt={`${name} logo`}
          />
        </div>
        <div className='ml-4'>
          <h3 className='text-lg font-bold'>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
      <p>{summary}</p>
      <ul className='list-inside list-disc text-sm'>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};
