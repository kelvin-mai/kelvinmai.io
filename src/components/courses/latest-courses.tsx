import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Img } from '../image';
import { ExternalLink } from '../external-link';

const query = graphql`
  query {
    courses: allCoursesJson(limit: 2) {
      nodes {
        title
        image
        slug
        pid
      }
    }
    images: allFile(filter: { relativeDirectory: { eq: "courses" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
        relativePath
      }
    }
  }
`;

export const LatestCourses = () => {
  const { courses: courseData, images } = useStaticQuery(query);
  const courses = courseData.nodes.map(course => ({
    ...course,
    image: images.nodes.find(
      image => image.relativePath === `courses/${course.image}`
    ),
  }));
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-8 w-5/6 lg:w-2/3 mx-auto'>
      {courses.map(course => (
        <ExternalLink
          key={course.id}
          href={`https://www.youtube.com/playlist?list=${course.pid}`}
        >
          <Img
            className='rounded-lg shadow-xl'
            imageSrc={course.image.childImageSharp.fluid}
          />
        </ExternalLink>
      ))}
    </div>
  );
};
