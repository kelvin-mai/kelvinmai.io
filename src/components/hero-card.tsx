import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { tw } from '../utils/tailwind';
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

interface DataType {
  avatar: ImageData;
  [additional: string]: any;
}

export const HeroCard = () => {
  const { avatar, info }: DataType = useStaticQuery(query);
  const {
    label,
    name,
    summary,
    location: { city, region },
  } = info.nodes[0].basics;
  return (
    <div
      className={tw(
        { md: 'w-5/6', lg: 'w-3/4 py-0', xl: 'w-1/2' },
        'w-full flex items-center h-auto flex-wrap mx-auto py-32 text-black'
      )}
    >
      <div
        className={tw(
          {
            md: 'mx-6 rounded-lg opacity-80 mx-6',
            lg: 'w-3/5 mx-0',
          },
          'w-full bg-white shadow-2xl'
        )}
      >
        <div
          className={tw(
            { lg: 'text-left' },
            'py-4 px-8 text-center lg:text-left'
          )}
        >
          <div
            className={tw(
              { lg: 'hidden' },
              'block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 overflow-hidden'
            )}
          >
            <Img fluid={avatar.childImageSharp.fluid} />
          </div>

          <h1
            className={tw({ lg: 'pt-0 text-4xl' }, 'text-3xl font-bold pt-8')}
          >
            {name}
          </h1>
          <p
            className={tw(
              { lg: 'justify-start text-xl' },
              'text-dark-purple font-bold flex items-center justify-center'
            )}
          >
            {label}
          </p>
          <p
            className={tw(
              { lg: 'text-base' },
              'text-gray-600 text-sm flex items-center justify-center lg:justify-start'
            )}
          >
            {city}, {region}
          </p>
          <p className='py-2'>{summary}</p>
          <SocialLinks
            className={tw(
              {
                lg: 'pb-0 w-full',
              },
              'mt-2 pb-4 w-4/5 mx-auto flex flex-wrap items-center justify-around'
            )}
          />
        </div>
      </div>
      <div className={tw({ lg: 'w-2/5 -ml-2' }, 'w-full')}>
        <div
          className={tw(
            { lg: 'rounded-lg block' },
            'rounded-none shadow-2xl hidden overflow-hidden'
          )}
        >
          <Img fluid={avatar.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  );
};
