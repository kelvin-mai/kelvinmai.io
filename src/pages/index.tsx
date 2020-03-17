import React from 'react';
import { Link } from 'gatsby';

import bgImage from '../assets/images/bg.jpg';
import { Layout } from '../components/layout';
import { HeroCard } from '../components/hero-card';
import { TutorailSection } from '../components/tutorial-section';
import { HighlightedCourses } from '../components/highligted-courses';
import { AboutSection } from '../components/about-section';
import { Resume } from '../components/resume';

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
      <HighlightedCourses />
    </section>
    <TutorailSection limit={4} />
    <section className='bg-real-white'>
      <div className='container'>
        <AboutSection />
      </div>
    </section>
    <section className='bg-white text-black h-screen'>
      <div className='container pt-4'>
        <Resume />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
