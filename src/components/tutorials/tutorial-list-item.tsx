import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

import { Img } from '../image';
import { ImageData } from '../../types';

interface Props {
  title: string;
  videoId: string;
  publishedAt: string;
  thumbnailImage: ImageData;
  tags: string[];
}

export const TutorialListItem: React.FC<Props> = ({
  title,
  videoId,
  publishedAt,
  thumbnailImage,
  tags,
}) => (
  <motion.li
    initial={{
      backgroundColor: '#f8f8f2',
      borderRadius: null,
    }}
    whileHover={{
      scale: 1.015,
      backgroundColor: '#fff',
      borderRadius: '0.5rem',
    }}
    className='w-full flex justify-between py-4 px-2 text-dark border-b border-purple first:border-b-0 hover:shadow-2xl'
  >
    <div className='w-1/2 md:w-1/4'>
      <Link to={`/tutorials/${videoId}`}>
        <Img
          className='w-full rounded-lg hover:shadow-md'
          imageSrc={thumbnailImage.childImageSharp.fluid}
        />
      </Link>
    </div>
    <div className='flex flex-col justify-between flex-grow ml-4'>
      <div>
        <h3 className='text-dark-purple text-lg font-bold'>
          <Link to={`/tutorials/${videoId}`}>{title}</Link>
        </h3>
        <p>{publishedAt}</p>
      </div>
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
  </motion.li>
);
