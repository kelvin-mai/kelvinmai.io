import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '../components/layout';
import { VideoPlayer } from '../components/video-player';
import { ImageData } from '../types';

interface Props {
  pageContext: { videoId: string };
}

const query = graphql`
  query {
    tutorials: allTutorialsJson {
      nodes {
        title
        videoId
        publishedAt(formatString: "ll")
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
      publishedAt: string;
      thumbnailImage: ImageData;
    }[];
  };
}

export const Tutorial: React.FC<Props> = ({ pageContext: { videoId } }) => {
  const data: DataType = useStaticQuery(query);
  const info = data.tutorials.nodes.find(node => node.videoId === videoId);
  return (
    <Layout title='Video'>
      <div className='h-screen flex flex-col lg:flex-row pt-8 pb-8'>
        <div className='lg:flex-grow pb-16'>
          <VideoPlayer videoId={videoId} />
          <div className='flex justify-between mt-4'>
            <h2 className='text-2xl font-bold'>{info.title}</h2>
            <p>{info.publishedAt}</p>
          </div>
        </div>
        <h3 className='text-center text-xl lg:hidden pb-4'>
          Check out some other tutorials
        </h3>
        <div className='w-full lg:w-1/3 lg:pl-4 overflow-scroll'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:flex lg:flex-col'>
            {data.tutorials.nodes
              .filter(tutorial => tutorial.videoId !== videoId)
              .map(tutorial => (
                <Link
                  className='rounded-lg overflow-hidden lg:m-4'
                  to={`/tutorials/${tutorial.videoId}`}
                >
                  <Img fluid={tutorial.thumbnailImage.childImageSharp.fluid} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Tutorial;
