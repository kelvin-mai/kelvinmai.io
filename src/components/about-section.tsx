import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "me-about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className='flex justify-between pt-8 pb-20 text-black'>
      <div className='w-2/3 text-center sm:pr-8 mx-auto'>
        <h2 className='text-3xl sm:text-5xl'>About Kelvin</h2>
        <p className='text-xl'>
          Full Stack Developer, Aspiring Polyglot, and Full Time Nerd.
        </p>
      </div>
      <div className='w-1/3 hidden sm:block'>
        <Img fluid={data.avatar.childImageSharp.fluid} />
      </div>
    </div>
  );
};
