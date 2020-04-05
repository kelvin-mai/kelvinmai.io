import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { tw } from '../../utils/tailwind';
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
  return (
    <ul className={tw({ md: 'rounded-md my-4' }, 'bg-white')}>
      {data.tutorials.nodes.map(tutorial => (
        <TutorialListItem key={tutorial.id} {...tutorial} />
      ))}
    </ul>
  );
};
