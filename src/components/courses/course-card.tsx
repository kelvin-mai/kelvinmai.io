import React from 'react';

import { ExternalLink } from '../external-link';
import { Img } from '../image';
import { ImageData } from '../../types';

interface Props {
  pid: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  videos: any[];
  image: ImageData;
}

export const CourseCard: React.FC<Props> = ({
  pid,
  slug,
  title,
  description,
  videos,
  image,
  tags,
}) => (
  <ExternalLink
    className='flex overflow-hidden rounded-lg my-4 bg-real-white text-black shadow-lg'
    href={`https://www.youtube.com/playlist?list=${pid}`}
    // to={`/courses/${slug}`}
  >
    <Img className='w-1/3' imageSrc={image.childImageSharp.fluid} />
    <div className='pl-8 w-2/3'>
      <h2 className='text-2xl text-dark-purple font-bold'>{title}</h2>
      <p>{videos.length} Videos</p>
      <p>{description}</p>
      <ul className='text-right'>
        {tags.map(tag => (
          <li
            key={tag}
            className='inline-block bg-purple text-black px-2 m-1 rounded text-sm cursor-pointer shadow lowercase hover:bg-dark-purple hover:text-pink hover:shadow-md'
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </ExternalLink>
);
