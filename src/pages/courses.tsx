import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '../components/layout/layout';

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
        <div className='text-center text-black'>
          <h1 className='text-4xl'>Courses</h1>
          <p className='text-xl'>All of my available courses</p>
        </div>
        <div className='w-11/12 lg:w-full mx-auto'>
          {courses.map(course => (
            <Link
              key={course.id}
              className='flex overflow-hidden rounded-lg my-4 bg-real-white text-black shadow-lg'
              to={`/courses/${course.slug}`}
            >
              <div className='w-1/3'>
                <Img fluid={course.image.childImageSharp.fluid} />
              </div>
              <div className='pl-8 flex-grow'>
                <h2 className='text-2xl text-dark-purple font-bold'>
                  {course.title}
                </h2>
                <p>{course.videos.length} Videos</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
