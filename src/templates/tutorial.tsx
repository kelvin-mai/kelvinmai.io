import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '../components/layout';
import { VideoPlayer } from '../components/video-player';

interface Props {
  pageContext: { videoId: string };
}

export const Tutorial: React.FC<Props> = ({ pageContext: { videoId } }) => {
  const data = useStaticQuery(graphql`
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
  `);
  const info = data.tutorials.nodes.find(node => node.videoId === videoId);
  return (
    <Layout title='Video'>
      <div className='h-screen flex flex-col lg:flex-row mt-8'>
        <div className='lg:flex-grow'>
          <VideoPlayer videoId={videoId} />
          <div className='flex justify-between mt-4'>
            <h2 className='text-2xl font-bold'>{info.title}</h2>
            <p>{info.publishedAt}</p>
          </div>
        </div>
        <div className='w-full lg:w-1/3 pl-4 overflow-scroll'>
          <div className='flex flex-row lg:flex-col'>
            {data.tutorials.nodes.map(tutorial => (
              <Link
                className='w-auto h-auto rounded-lg overflow-hidden m-4'
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
