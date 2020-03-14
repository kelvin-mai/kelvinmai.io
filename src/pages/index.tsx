import React from 'react';

import img from '../assets/images/bg.jpg';
import { Layout } from '../components/layout';
import { HeroCard } from '../components/hero-card';

const IndexPage = () => (
  <Layout title='Home' fullWidth>
    <section
      className='bg-fixed bg-bottom xl:bg-top bg-no-repeat h-screen-3/4 2k:h-1000'
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className='md:pt-10 lg:pt-20'>
        <HeroCard />
      </div>
    </section>
    <section className='h-screen-3/4 container'>{/* add stuff here */}</section>
  </Layout>
);

export default IndexPage;
