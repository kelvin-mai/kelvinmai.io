import Image from 'next/image';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui';
import Link from 'next/link';

type FreelanceCardProps = {
  slug: string;
  title: string;
  subtitle: string;
};

export const FreelanceCard: React.FC<FreelanceCardProps> = ({
  slug,
  title,
  subtitle,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <div className='overflow-hidden rounded-lg shadow-md'>
          <Link href={`/freelance/${slug}`}>
            <Image
              src={`/images/freelance/${slug}/thumbnail.jpg`}
              alt='Vero'
              width={1920}
              height={1440}
            />
          </Link>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <h4 className='bold text-center'>{title}</h4>
        <p className='text-center'>{subtitle}</p>
      </TooltipContent>
    </Tooltip>
  );
};
