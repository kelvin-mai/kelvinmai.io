import React from 'react';
import { Link } from 'gatsby';

const pages = [
  { to: '/', name: 'home' },
  { to: '/uses', name: 'uses' },
];

export const Header = () => (
  <header className='container'>
    <nav className='flex justify-between'>
      <div>
        <Link to='/'>Kelvin Mai</Link>
      </div>
      <ul className='flex flex-row'>
        {pages.map(page => (
          <li key={page.name} className='ml-2'>
            <Link to={page.to}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
