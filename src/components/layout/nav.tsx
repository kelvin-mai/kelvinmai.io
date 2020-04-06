import React from 'react';
import classnames from 'classnames';
import { useToggle } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useStaticQuery, graphql } from 'gatsby';

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

export const Nav = () => {
  const [open, toggleOpen] = useToggle(false);
  const data = useStaticQuery(query);
  const menu = {
    closed: { opacity: 0, scaleX: 0, x: 24 },
    open: { opacity: 1, scaleX: 1, x: 0 },
    style: { originX: 1 },
  };
  const menuItems = data.pages.nodes.map(page => (
    <li key={page.name} className='ml-2 hover:text-purple'>
      <Link to={page.to}>{page.name}</Link>
    </li>
  ));
  return (
    <nav className='flex justify-center md:justify-end'>
      <ul className='block flex item-center md:hidden'>{menuItems}</ul>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial='closed'
            animate='open'
            exit='closed'
            variants={menu}
            style={menu.style}
            className='flex items-center bg-black px-2 shadow-md rounded-md'
          >
            {menuItems}
          </motion.ul>
        )}
      </AnimatePresence>
      <div
        className={classnames(
          'hidden m-1 mx-4 md:block md:rounded-full md:shadow-xl md:p-2',
          { ['md:bg-red']: open, ['md:bg-pink']: !open }
        )}
        onClick={toggleOpen}
      >
        <Burger open={open} />
      </div>
    </nav>
  );
};
