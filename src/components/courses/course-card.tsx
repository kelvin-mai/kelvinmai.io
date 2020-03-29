import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import { ExternalLink } from '../external-link';
import { ImageData } from '../../types';

interface Props {
  pid: string;
  slug: string;
  title: string;
  videos: any[];
  image: ImageData;
}

export const CourseCard: React.FC<Props> = ({
  pid,
  slug,
  title,
  videos,
  image,
}) => (
  <ExternalLink
    className='flex overflow-hidden rounded-lg my-4 bg-real-white text-black shadow-lg'
    href={`https://www.youtube.com/playlist?list=${pid}`}
    // to={`/courses/${slug}`}
  >
    <div className='w-1/3'>
      <Img fluid={image.childImageSharp.fluid} />
    </div>
    <div className='pl-8 flex-grow'>
      <h2 className='text-2xl text-dark-purple font-bold'>{title}</h2>
      <p>{videos.length} Videos</p>
    </div>
  </ExternalLink>
);
