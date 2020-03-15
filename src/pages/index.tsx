import React from 'react';

import bgImage from '../assets/images/bg.jpg';
import { Layout } from '../components/layout';
import { HeroCard } from '../components/hero-card';
import { TutorailSection } from '../components/tutorial-section';

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
      <TutorailSection limit={4} />
    </Layout>
  );
};

export default IndexPage;
