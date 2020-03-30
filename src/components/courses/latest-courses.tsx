import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
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

interface DataType {
  courses: {
    nodes: {
      id: string;
      pid: string;
      title: string;
      image: string;
      slug: string;
    }[];
  };
  images: {
    nodes: {
      childImageSharp: {
        fluid: any;
      };
      relativePath: string;
    }[];
  };
}

export const LatestCourses = () => {
  const { courses: courseData, images }: DataType = useStaticQuery(query);
  const courses = courseData.nodes.map(course => ({
    ...course,
    image: images.nodes.find(
      image => image.relativePath === `courses/${course.image}`
    ),
  }));
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-1 gap-8 w-5/6 sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto'>
      {courses.map(course => (
        <ExternalLink
          key={course.id}
          className='w-auto h-auto rounded-lg shadow-xl overflow-hidden'
          // to={`/courses/${course.slug}`}
          href={`https://www.youtube.com/playlist?list=${course.pid}`}
        >
          <Img fluid={course.image.childImageSharp.fluid} />
        </ExternalLink>
      ))}
    </div>
  );
};
