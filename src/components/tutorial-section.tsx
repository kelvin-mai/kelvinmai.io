import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { ImageData } from '../types';

interface Props {
  limit?: number;
}

const query = graphql`
  query {
    tutorials: allTutorialsJson {
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
`;

interface DataType {
  tutorials: {
    nodes: {
      title: string;
      videoId: string;
      thumbnailImage: ImageData;
    }[];
  };
}

export const TutorailSection: React.FC<Props> = ({ limit }) => {
  const data: DataType = useStaticQuery(query);
  let nodes = data.tutorials.nodes;
  if (limit) {
    nodes = nodes.filter((_, i) => i < limit);
  }
  return (
    <section className='h-auto pt-8 pb-8'>
      <div className='container'>
        <div className='text-center mb-4'>
          <h2 className='text-2xl font-bold uppercase'>Tutorials</h2>
          <p className='text-xl'>
            Below is a collection of my latest tutorials.
          </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pb-8'>
          {nodes.map(tutorial => (
            <Link
              className='w-auto h-auto rounded-lg overflow-hidden'
              to={`/tutorials/${tutorial.videoId}`}
            >
              <Img fluid={tutorial.thumbnailImage.childImageSharp.fluid} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
