import React from 'react';
import icons from 'simple-icons';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Icon } from './icon';

const socialLinks = [
  { to: 'https://twitter.com/kelvinmai', icon: 'Twitter' },
  { to: 'https://youtube.com/c/kelvinmai', icon: 'Youtube' },
  { to: 'https://www.linkedin.com/in/kelvin-mai-461756152/', icon: 'Linkedin' },
];

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "me-circle.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <footer className='bg-black text-white'>
      <div className='container pt-4'>
        <div className='flex justify-between'>
          <div className='w-40'>
            <Img fluid={data.avatar.childImageSharp.fluid} />
          </div>
          <div>
            <h3 className='text-xl font-bold'>Follow Me</h3>
            {socialLinks.map(({ to, icon }) => (
              <a key={icon} href={to} target='_blank' rel='noopener noreferrer'>
                <Icon icon={icons.get(icon)} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <h4 className='text-center mt-8 pb-2'>
        © {new Date().getFullYear()} Kelvin Mai | made with{' '}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>{' '}
      </h4>
    </footer>
  );
};
