'use client';
import Image from 'next/image';
import Link from 'next/link';

export interface CourseCardProps {
  description: string;
  image: string;
  pid: string;
  tags: string[];
  title: string;
  videos: any[];
}

export const CourseCard: React.FC<CourseCardProps> = ({
  pid,
  title,
  videos,
  image,
}) => {
  return (
    <li className='rounded-lg overflow-hidden drop-shadow-lg bg-white shine'>
      <Link href={`https://www.youtube.com/playlist?list=${pid}`}>
        <div className='w-full'>
          <Image
            src={`/images/courses/${image}`}
            alt={image}
            width={640}
            height={360}
          />
        </div>
        <div className='p-4'>
          <h3 className='text-lg text-dracula-black font-bold'>{title}</h3>
          <p className='text-dracula-dark'>
            {videos.length} videos {/* - 40 min */}
          </p>
        </div>
      </Link>
    </li>
  );
};
