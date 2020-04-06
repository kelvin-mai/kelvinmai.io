import React from 'react';
import icons from 'simple-icons';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { SocialLinks } from '../social-links';
import { Icon } from '../icon';

const query = graphql`
  query {
    pages: allPageLinksJson {
      nodes {
        id
        name
        to
      }
    }
  }
`;

export const Footer = () => {
  const { pages } = useStaticQuery(query);
  return (
    <footer className='bg-black text-white pt-8'>
      <section className='container flex flex-col md:flex-row justify-between uppercase font-bold font-mono'>
        <ul className='font-normal capitalize text-center md:text-left'>
          {pages.nodes.map(({ id, to, name }) => (
            <li key={id} className='hover:text-pink'>
              <Link to={to}>{name}</Link>
            </li>
          ))}
        </ul>
        <div className='text-center'>
          <p className='pt-4 md:pt-0'>Contact</p>
          <a href='mailto:kelvin.mai002@gmail.com'>
            <Icon icon={icons.get('Gmail')} />
          </a>
        </div>
        <div className='text-center md:text-right'>
          <p className='hidden md:block'>Follow</p>
          <SocialLinks className='text-white' />
        </div>
      </section>
      <p className='text-center p-2'>
        © {new Date().getFullYear()} Kelvin Mai | made with{' '}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>{' '}
      </p>
    </footer>
  );
};
