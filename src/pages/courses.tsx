import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout, PageHeader, Section } from '../components/layout';
import { CourseCard } from '../components/courses/course-card';

const query = graphql`
  query {
    courses: allCoursesJson {
      nodes {
        title
        pid
        image
        slug
        description
        tags
        videos {
          title
          videoId
          ordinance
          thumbnail
        }
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

export const Courses = () => {
  const data = useStaticQuery(query);
  const courses = data.courses.nodes.map(course => ({
    ...course,
    image: data.images.nodes.find(
      image => image.relativePath === `courses/${course.image}`
    ),
  }));
  return (
    <Layout title='Courses' bg='bg-white'>
      <Section>
        <PageHeader
          className='text-dark'
          title='Courses'
          subtitle='All of my Available courses'
        />
        <div>
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Courses;
