import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { SocialLinks } from './social-links';
import { ImageData } from '../types';

const query = graphql`
  query {
    avatar: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

interface DataType {
  avatar: ImageData;
}

export const HeroCard = () => {
  const { avatar }: DataType = useStaticQuery(query);
  return (
    <div className='sm:w-full md:w-5/6 lg:w-3/5 pb-5 mx-auto md:rounded-lg md:shadow-xl bg-white text-black'>
      <div className='flex sm:justify-between p-5'>
        <div className='w-40 rounded-full overflow-hidden h-fit'>
          <Img fluid={avatar.childImageSharp.fluid} />
        </div>
        <div className='ml-2 flex-grow text-center sm:text-center md:text-right'>
          <h2 className='text-3xl xs:text-4xl'>Kelvin Mai</h2>
          <SocialLinks />
          <p className='text-lg hidden sm:block md:block'>
            Full Stack Developer, Aspiring Polyglot, and Full Time Nerd.
          </p>
        </div>
      </div>
      <div className='justify-center hidden md:flex p-2'>
        <img
          src='https://ghchart.rshah.org/6272a4/kelvin-mai'
          alt="Kelvin Mai's Github chart"
          width='700'
          height='100'
        />
      </div>
    </div>
  );
};
