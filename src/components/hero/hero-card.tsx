import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Img } from '../image';
import { SocialLinks } from '../social-links';

const query = graphql`
  query {
    avatar: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    info: allResumeJson {
      nodes {
        basics {
          label
          name
          summary
          location {
            city
            region
          }
        }
      }
    }
  }
`;

export const HeroCard = () => {
  const { avatar, info } = useStaticQuery(query);
  const {
    label,
    name,
    summary,
    location: { city, region },
  } = info.nodes[0].basics;
  return (
    <div className='w-full flex items-center h-auto flex-wrap mx-auto py-32 text-black md:w-5/6 lg:w-3/4 lg:py-0 xl:w-1/2'>
      <div className='w-full bg-white shadow-2xl md:mx-6 md:rounded-lg md:opacity-80 md:mx-6 lg:w-3/5 lg:mx-0'>
        <div className='py-4 px-8 text-center lg:text-left'>
          <Img
            className='block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48'
            imageSrc={avatar.childImageSharp.fluid}
          />
          <h1 className='text-3xl font-bold pt-8 lg:pt-0 lg:text-4xl'>
            {name}
          </h1>
          <p className='text-dark-purple font-bold flex items-center justify-center lg:justify-start lg:text-xl'>
            {label}
          </p>
          <p className='text-gray-600 text-sm flex items-center justify-center lg:justify-start lg:text-base'>
            {city}, {region}
          </p>
          <p className='py-2'>{summary}</p>
          <SocialLinks className='mt-2 pb-4 w-4/5 mx-auto flex flex-wrap items-center justify-around lg:pb-0 lg:w-full' />
        </div>
      </div>
      <Img
        className='w-full lg:w-2/5 lg:-ml-2 rounded lg:rounded-lg hidden lg:block shadow-2xl'
        imageSrc={avatar.childImageSharp.fluid}
      />
    </div>
  );
};
