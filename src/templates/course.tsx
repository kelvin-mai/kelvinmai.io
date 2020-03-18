import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useSearchParam } from 'react-use';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '../components/layout/layout';
import { VideoPlayer } from '../components/video-player';

interface Props extends RouteComponentProps {
  pageContext: { image: string; videos: any[] };
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

export const Course: React.FC<Props> = ({
  pageContext: { image, videos },
  navigate,
  path,
}) => {
  const { images } = useStaticQuery(query);
  const imgSrc = images.nodes.find(node => node.relativePath === image);
  const vid = useSearchParam('v');
  const setVid = (videoId: string) => navigate(path + '?v=' + videoId);
  return (
    <Layout title='Video'>
      <div className='h-screen flex pt-16'>
        <div className='flex-grow'>
          <div className='shadow-2xl rounded-lg overflow-hidden'>
            {vid ? (
              <VideoPlayer videoId={vid} />
            ) : (
              <Img fluid={imgSrc.childImageSharp.fluid} />
            )}
          </div>
        </div>
        <div className='w-1/3 pl-4 flex flex-col'>
          {videos.map(v => (
            <button
              className='text-left'
              key={v.videoId}
              onClick={() => setVid(v.videoId)}
            >
              {v.title}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Course;
