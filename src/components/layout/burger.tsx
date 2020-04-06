import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';

interface Props {
  open: boolean;
}

const animations = {
  burger: {
    open: { opacity: 1, scale: 0.8, rotate: 180 },
    closed: { opacity: 1, scale: 0.8, rotate: 0 },
    hidden: { opacity: 0, scale: 2 },
    hover: { scale: 1 },
  },
  top: {
    open: { width: '100%', rotate: 135, y: '1rem' },
    closed: { width: '66.66%', rotate: 0, y: 0 },
  },
  middle: {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  },
  bottom: {
    open: { width: '100%', rotate: -135, y: '1rem', top: 0, bottom: null },
    closed: { width: '66.66%', rotate: 0, y: 0, top: null, bottom: 0 },
  },
};

const BurgerBun = ({ className, ...props }) => (
  <motion.div
    className={classnames('h-1 absolute block bg-white rounded', className)}
    initial='closed'
    {...props}
  />
);

export const Burger: React.FC<Props> = ({ open }) => {
  const animate = open ? 'open' : 'closed';
  return (
    <motion.div
      initial='hidden'
      animate={animate}
      whileHover='hover'
      variants={animations.burger}
      className='h-8 w-8 relative cursor-pointer'
    >
      <BurgerBun
        className='w-2/3 top-0 right-0'
        animate={animate}
        variants={animations.top}
      />
      <BurgerBun
        className='w-full inset-y-1/2'
        animate={animate}
        variants={animations.middle}
        style={{ transform: 'translateY(-50%)' }}
      />
      <BurgerBun
        className='w-2/3 bottom-0 left-0'
        animate={animate}
        variants={animations.bottom}
      />
    </motion.div>
  );
};
