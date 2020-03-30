import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '../components/layout/layout';
import { ExternalLink } from '../components/external-link';
import { UseSection } from '../components/uses/use-section';
import { ImageData } from '../types';

const query = graphql`
  query {
    screenshot: file(relativePath: { eq: "screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    uses: allUsesJson {
      nodes {
        title
        tools {
          description
          link
          title
        }
      }
    }
  }
`;

interface DataType {
  screenshot: ImageData;
  uses: {
    nodes: {
      id: string;
      title: string;
      tools: {
        id: string;
        title: string;
        link: string;
        description: string;
      }[];
    }[];
  };
}

const Uses = () => {
  const data: DataType = useStaticQuery(query);
  return (
    <Layout title='Uses'>
      <div className='w-11/12 mx-auto text-center'>
        <h1 className='text-4xl'>Uses</h1>
        <p className='text-xl'>
          This is an almost comprehensive list of the tools that I use.
        </p>
        <p>
          I am a big believer in personalization in your tools because after all
          as a dev you look at your screen everyday. To checkout my particular
          flavor of configuration files you can find them{' '}
          <ExternalLink
            className='text-cyan hover:text-pink'
            href='https://github.com/kelvin-mai/dotfiles'
          >
            here.
          </ExternalLink>
        </p>
        <div className='w-5/6 mx-auto shadow-xl rounded-lg overflow-hidden mt-4'>
          <Img fluid={data.screenshot.childImageSharp.fluid} />
        </div>
      </div>
      {data.uses.nodes.map(section => (
        <UseSection key={section.id} {...section} />
      ))}
    </Layout>
  );
};

export default Uses;
