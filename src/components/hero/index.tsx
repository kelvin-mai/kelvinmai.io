import React from 'react';

import bgImage from '../../assets/images/bg.jpg';
import { HeroCard } from './hero-card';

export const HeroSection = () => (
  <section
    className='bg-fixed bg-bottom xl:bg-top bg-no-repeat h-screen-3/4 2k:h-1000'
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className='md:pt-10 lg:pt-20'>
      <HeroCard />
    </div>
  </section>
);
