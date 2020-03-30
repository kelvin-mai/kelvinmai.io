import React from 'react';
import { motion } from 'framer-motion';
import Img from 'gatsby-image';

import { tw } from '../../utils/tailwind';
import { ImageData } from '../../types';
import { Link } from 'gatsby';

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
    className={tw(
      { first: 'border-b-0', hover: 'shadow-2xl' },
      'w-full flex justify-between py-4 px-2 text-dark border-b border-purple'
    )}
  >
    <div className={tw({ md: 'w-1/4' }, 'w-1/2')}>
      <Link
        className={tw(
          { hover: 'shadow-md' },
          'block rounded-lg overflow-hidden'
        )}
        to={`/tutorials/${videoId}`}
      >
        <Img fluid={thumbnailImage.childImageSharp.fluid} />
      </Link>
    </div>
    <div
      className={tw(
        { md: 'flex' },
        'flex flex-col justify-between flex-grow ml-4'
      )}
    >
      <div>
        <h3 className='text-dark-purple text-lg font-bold'>
          <Link to={`/tutorials/${videoId}`}>{title}</Link>
        </h3>
        <p>{publishedAt}</p>
      </div>
      <ul className='text-right'>
        {tags.map(tag => (
          <li
            className={tw(
              { hover: 'bg-dark-purple text-pink shadow-md' },
              'inline-block bg-purple text-black px-2 m-1 rounded text-sm cursor-pointer shadow lowercase'
            )}
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </motion.li>
);
