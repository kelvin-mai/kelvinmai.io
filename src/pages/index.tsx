import React from 'react';
import { Link } from 'gatsby';

import bgImage from '../assets/images/bg.jpg';
import { Layout } from '../components/layout';
import { HeroCard } from '../components/hero-card';
import { TutorailSection } from '../components/tutorial-section';
import { HighlightedCourses } from '../components/highligted-courses';

const IndexPage = () => {
  return (
    <Layout title='Home' fullWidth>
      <section
        className='bg-fixed bg-bottom xl:bg-top bg-no-repeat h-screen-3/4 2k:h-1000'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='md:pt-10 lg:pt-20'>
          <HeroCard />
        </div>
      </section>
      <section className='md:-m-16 pb-16'>
        <Link to='/courses'>
          <h2 className='block md:hidden mt-8 pb-8 font-bold uppercase text-center text-2xl'>
            Courses
          </h2>
        </Link>
        <HighlightedCourses />
      </section>
      <TutorailSection limit={4} />
    </Layout>
  );
};

export default IndexPage;
