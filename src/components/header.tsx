import React from 'react';
import { useWindowScroll } from 'react-use';
import classnames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      pages: allPageLinksJson {
        nodes {
          name
          to
        }
      }
    }
  `);
  const { y } = useWindowScroll();
  return (
    <header className={classnames('fixed w-full z-50', { 'bg-black': y > 80 })}>
      <div className='container'>
        <nav className='flex justify-between'>
          <div>
            <Link to='/'>Kelvin Mai</Link>
          </div>
          <ul className='flex flex-row'>
            {data.pages.nodes.map(page => (
              <li key={page.name} className='ml-2'>
                <Link to={page.to}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
