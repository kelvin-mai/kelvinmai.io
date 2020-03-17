import React from 'react';
import { useToggle } from 'react-use';

import { Layout } from '../components/layout/layout';
import { AboutSection } from '../components/about-section';
import { Resume } from '../components/resume';

export const About = () => {
  const [resume, toggleResume] = useToggle(false);
  return (
    <Layout title='About' fullWidth>
      <section className='bg-real-white'>
        <div className='container'>
          <AboutSection />
        </div>
      </section>
      <section className='bg-white text-black h-screen pt-4'>
        <button
          className='block w-auto mx-auto border rounded p-2'
          onClick={toggleResume}
        >
          View as Resume
        </button>
        <div className='container pt-4'>{resume && <Resume />}</div>
      </section>
    </Layout>
  );
};

export default About;
