import React from 'react';
import classnames from 'classnames';
import { useToggle } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { Burger } from '../burger';
import { tw } from '../../utils/tailwind';

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

interface DataType {
  pages: {
    nodes: {
      name: string;
      to: string;
    }[];
  };
}

export const Nav = () => {
  const [open, toggleOpen] = useToggle(false);
  const data: DataType = useStaticQuery(query);
  const menu = {
    closed: { opacity: 0, scaleX: 0, x: 24 },
    open: { opacity: 1, scaleX: 1, x: 0 },
    style: { originX: 1 },
  };
  const menuItems = data.pages.nodes.map(page => (
    <li key={page.name} className={tw({ hover: 'text-purple' }, 'ml-2')}>
      <Link to={page.to}>{page.name}</Link>
    </li>
  ));
  return (
    <nav className={tw({ md: 'justify-end' }, 'flex justify-center')}>
      <ul className={tw({ md: 'hidden' }, 'block flex item-center ')}>
        {menuItems}
      </ul>
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
          tw({ md: 'block rounded-full shadow-xl p-2' }, 'hidden m-1 mx-4'),
          { [tw({ md: 'bg-red' })]: open, [tw({ md: 'bg-pink' })]: !open }
        )}
        onClick={toggleOpen}
      >
        <Burger open={open} />
      </div>
    </nav>
  );
};
