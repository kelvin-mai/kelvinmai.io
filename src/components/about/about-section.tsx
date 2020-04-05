import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { ImageData } from '../../types';
import { ExternalLink } from '../../components/external-link';
import { PageHeader } from '../page-header';

const query = graphql`
  query {
    avatar: file(relativePath: { eq: "me-about.jpg" }) {
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

export const AboutSection = () => {
  const { avatar }: DataType = useStaticQuery(query);
  return (
    <div className='flex flex-col md:flex-row-reverse justify-between pt-8 pb-20 text-black'>
      <div className='w-1/2 mx-auto md:w-1/3 overflow-hidden rounded-full md:rounded-none'>
        <Img fluid={avatar.childImageSharp.fluid} />
      </div>
      <div className='w-full md:w-2/3 flex-grow md:pr-8 mx-auto'>
        <PageHeader
          title='About Kelvin'
          subtitle='Kelvin is a self taught full stack developer.'
        />
        <div className='mx-auto text-justify p-4'>
          <p>
            Although I am a college dropout, I had a passion about programming
            and slowly came back to the pratice of being self taught. Eventually
            landing myself in a full stack coding bootcamp{' '}
            <ExternalLink
              className='text-purple hover:text-pink'
              href='https://www.digitalcrafts.com/'
            >
              Digital Crafts.
            </ExternalLink>{' '}
            And that's where my career as a software developer has truely taken
            off. My biggest takeaway was a new passion of learning and teaching
            programming. Which is the main reason I started creating tutorials
            and courses.
          </p>
          <p>
            I'm a big advocate of functional programming. Which has lead me to
            want to be more than just a JavaScript developer and aim to become a
            polyglot in the functional family of languages.
          </p>
          <p>
            I may be a workaholic, but that's only because programming has
            become a bit of a hobby of mine. But don't worry I am still a normal
            human, some of my other hobbies include films, video and tabletop
            games, just your typical nerd. Another one of my passions is self
            development and becoming the best version of myself.
          </p>
          <a
            className='inline-block mt-4 py-2 px-4 bg-dark-purple hover:bg-purple text-white shadow-md rounded'
            href='mailto:kelvin.mai002@gmail.com'
            target='_blank'
            title='Email'
            rel='noopener noreferrer'
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};
