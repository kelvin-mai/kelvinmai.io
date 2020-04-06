import React from 'react';
import { Link } from 'gatsby';

import { Layout, Section } from '../components/layout';
import { LatestTutorials } from '../components/tutorials/latest-tutorials';
import { LatestCourses } from '../components/courses/latest-courses';
import { HeroSection } from '../components/hero';

const IndexPage = () => (
  <Layout title='Home'>
    <HeroSection />
    <Section className='md:-mt-8 lg:-mt-16 xl:-mt-24 pb-8'>
      <Link to='/courses'>
        <h2 className='block md:hidden mt-8 pb-8 font-bold uppercase text-center text-2xl'>
          Courses
        </h2>
      </Link>
      <LatestCourses />
    </Section>
    <LatestTutorials />
  </Layout>
);

export default IndexPage;
