import React from 'react';
import icons from 'simple-icons';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Icon } from './icon';

export const HeroCard = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      socialLinks: allSocialLinksJson {
        nodes {
          icon
          to
        }
      }
    }
  `);
  return (
    <div className='sm:w-full md:w-5/6 lg:w-3/5 pb-5 mx-auto md:rounded-lg lg:shadow-xl bg-white'>
      <div className='flex sm:justify-between p-5'>
        <div className='w-40 rounded-full overflow-hidden h-fit'>
          <Img fluid={data.avatar.childImageSharp.fluid} />
        </div>
        <div className='ml-2 text-left sm:text-center md:text-right'>
          <h2 className='text-4xl'>Kelvin Mai</h2>
          <div>
            {data.socialLinks.nodes.map(({ to, icon }) => (
              <a key={icon} href={to} target='_blank' rel='noopener noreferrer'>
                <Icon
                  icon={icons.get(icon)}
                  className='inline fill-current text-black hover:text-dark m-1'
                />
              </a>
            ))}
          </div>
          <p className='text-lg hidden sm:block md:block'>
            Full Stack Developer, Aspiring Polyglot, and Full Time Nerd.
          </p>
        </div>
      </div>
      <div className='justify-center hidden md:flex'>
        <img
          src='https://ghchart.rshah.org/bd93f9/kelvin-mai'
          alt="Kelvin Mai's Github chart"
          width='700'
          height='100'
        />
      </div>
    </div>
  );
};
