import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Layout, PageHeader, Section } from '../components/layout';
import { Img } from '../components/image';
import { ExternalLink } from '../components/external-link';
import { UseSection } from '../components/uses/use-section';

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

const Uses = () => {
  const data = useStaticQuery(query);
  return (
    <Layout title='Uses'>
      <Section>
        <PageHeader
          title='Uses'
          subtitle='This is an almost comprehensive list of the tools I use.'
        />
        <p className='text-center'>
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
        <Img
          className='w-5/6 shadow-xl rounded-lg mt-4'
          imageSrc={data.screenshot.childImageSharp.fluid}
        />
      </Section>
      {data.uses.nodes.map(section => (
        <UseSection key={section.id} {...section} />
      ))}
    </Layout>
  );
};

export default Uses;
