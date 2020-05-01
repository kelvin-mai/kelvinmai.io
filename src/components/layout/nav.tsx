import React, { useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { motion, useCycle } from 'framer-motion';
import { useWindowSize } from 'react-use';

import { Burger } from './burger';

const query = graphql`
  query {
    pages: allPageLinksJson {
      nodes {
        name
        to
      }
    }
  }
`;

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 30px 30px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(24px at 30px 30px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const NavItem = ({ to, name }) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <motion.li
      className='ml-4 mb-4 flex items-center cursor-pointer'
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link className='pointer-cursor' to={to}>
        {name}
      </Link>
    </motion.li>
  );
};

export const NavItems = ({ items }) => {
  const variants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };
  return (
    <motion.ul
      className='absolute p-4 text-purple'
      style={{ top: '50px', width: '230px' }}
      variants={variants}
    >
      {items.map(item => (
        <NavItem to={item.to} name={item.name} />
      ))}
    </motion.ul>
  );
};

export const Nav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const data = useStaticQuery(query);
  const containerRef = useRef(null);
  const { height } = useWindowSize();
  return (
    <motion.nav
      className='absolute top-0 left-0 bottom-0'
      style={{ width: '300px' }}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      ref={containerRef}
    >
      <motion.div
        className='absolute bg-black top-0 left-0 bottom-0 shadow-lg'
        style={{ width: '300px', height }}
        variants={sidebar}
      />
      <NavItems items={data.pages.nodes} />
      <div style={{ margin: '15px' }} onClick={() => toggleOpen()}>
        <Burger open={isOpen} />
      </div>
    </motion.nav>
  );
};
