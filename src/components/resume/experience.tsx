import Image from 'next/image';

import { data } from './data';

export interface ExperienceProps {
  work: {
    name: string;
    position: string;
    image: string;
    summary: string;
    highlights: string[];
  }[];
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
        <div className='w-16'>
          <Image
            src={`/images/jobs/${image}`}
            height={64}
            width={64}
            alt={`${name} logo`}
          />
        </div>
        <div className='ml-4'>
          <h3 className='text-2xl font-bold'>{name}</h3>
          <p className='text-lg'>{position}</p>
        </div>
      </div>
      <p>{summary}</p>
      <ul className='list-inside list-disc'>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <div>
      <h2>Employment</h2>
      <div className='grid grid-cols-1 gap-4'>
        {data.work.map(ExperienceCard)}
      </div>
    </div>
  );
};
