import React from 'react';

import img from '../assets/images/bg.jpg';
import { Layout } from '../components/layout';
import { HeroCard } from '../components/hero-card';

const IndexPage = () => (
  <Layout title='Home' fullWidth>
    <section
      className='bg-fixed bg-bottom sm:h-screen lg:h-auto min-h-80vh'
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className='md:pt-10 lg:pt-20'>
        <HeroCard />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
