import React from 'react';
import { Link } from 'gatsby';

import bgImage from '../assets/images/bg.jpg';
import { Layout } from '../components/layout/layout';
import { HeroCard } from '../components/hero-card';
import { LatestTutorials } from '../components/tutorials/latest-tutorials';
import { LatestCourses } from '../components/courses/latest-courses';
import { AboutSection } from '../components/about/about-section';

const IndexPage = () => (
  <Layout title='Home' fullWidth>
    <section
      className='bg-fixed bg-bottom xl:bg-top bg-no-repeat h-screen-3/4 2k:h-1000'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='md:pt-10 lg:pt-20'>
        <HeroCard />
      </div>
    </section>
    <section className='md:-mt-8 lg:-mt-16 xl:-mt-24 pb-8'>
      <Link to='/courses'>
        <h2 className='block md:hidden mt-8 pb-8 font-bold uppercase text-center text-2xl'>
          Courses
        </h2>
      </Link>
      <LatestCourses />
    </section>
    <LatestTutorials />
    <section className='bg-real-white'>
      <div className='container'>
        <AboutSection />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
