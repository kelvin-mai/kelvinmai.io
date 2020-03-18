import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout } from '../components/layout/layout';
import { CourseCard } from '../components/courses/course-card';
import { PageHeader } from '../components/page-header';

const query = graphql`
  query {
    courses: allCoursesJson {
      nodes {
        title
        image
        slug
        videos {
          title
          videoId
          ordinance
          thumbnail
        }
      }
    }
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
  }
`;

interface DataType {
  courses: {
    nodes: {
      id: string;
      title: string;
      image: string;
      slug: string;
      videos: any[];
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

export const Courses = () => {
  const data: DataType = useStaticQuery(query);
  const courses = data.courses.nodes.map(course => ({
    ...course,
    image: data.images.nodes.find(image => image.relativePath === course.image),
  }));
  return (
    <Layout title='Courses' bg='bg-white'>
      <section className='py-8'>
        <PageHeader
          className='text-dark'
          title='Courses'
          subtitle='All of my Available courses'
        />
        <div className='w-11/12 lg:w-full mx-auto'>
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
