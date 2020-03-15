import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  limit?: number;
}

export const TutorailSection: React.FC<Props> = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query {
      tutorials: allTutorialLinksJson(limit: 12) {
        nodes {
          title
          videoId
          thumbnailImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  let nodes = data.tutorials.nodes;
  if (limit) {
    nodes = nodes.filter((_, i) => i < limit);
  }
  return (
    <section className='h-auto pt-8 pb-8'>
      <div className='container'>
        <div className='text-center mb-4'>
          <h3 className='text-2xl font-bold uppercase'>Tutorials</h3>
          <p className='text-xl'>
            Below is a collection of my latest tutorials.
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pb-8'>
          {nodes.map(tutorial => (
            <div className='w-auto h-auto rounded-lg overflow-hidden'>
              <Img fluid={tutorial.thumbnailImage.childImageSharp.fluid} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
