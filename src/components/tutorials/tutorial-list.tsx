import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { TutorialListItem } from './tutorial-list-item';

interface Props {}

const query = graphql`
  query {
    tutorials: allTutorialsJson {
      nodes {
        title
        videoId
        tags
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

export const TutorialList: React.FC<Props> = () => {
  const data = useStaticQuery(query);
  console.log(data);
  return (
    <ul className='bg-white md:rounded-md md:my-4'>
      {data.tutorials.nodes.map(tutorial => (
        <TutorialListItem key={tutorial.id} {...tutorial} />
      ))}
    </ul>
  );
};
