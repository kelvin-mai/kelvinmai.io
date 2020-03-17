import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '../components/layout/layout';

interface Props {
  pageContext: { image: string };
}

const query = graphql`
  query($image: String) {
    images: allFile {
      nodes {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
        relativePath
      }
    }
    image: file(relativePath: { eq: $image }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export const Course: React.FC<Props> = ({ pageContext, ...props }) => {
  const data = useStaticQuery(query);
  const imgSrc = data.images.nodes.find(
    node => node.relativePath === pageContext.image
  );
  return (
    <Layout title='Video'>
      <div className='h-screen flex'>
        <div className='flex-grow'>
          <div className='shadow-2xl rounded-lg overflow-hidden'>
            <Img fluid={imgSrc.childImageSharp.fluid} />
          </div>
        </div>
        <div className='w-1/3 pl-4'></div>
      </div>
    </Layout>
  );
};

export default Course;
