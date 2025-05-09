import { resume } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Badge } from '../ui';

type SkillsProps = {
  className?: string;
};

export const Skills: React.FC<SkillsProps> = ({ className }) => {
  return (
    <ul className={cn('space-y-2', className)}>
      {resume.skills.map((s) => (
        <li key={s.name} className='space-y-1'>
          <p className='text-lg font-bold'>{s.name}</p>
          <div className='flex flex-wrap gap-2'>
            {s.keywords.map((k) => (
              <Badge
                key={k}
                className='bg-neutral-800 font-semibold text-neutral-200 hover:bg-neutral-700 hover:text-neutral-50'
              >
                {k}
              </Badge>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
