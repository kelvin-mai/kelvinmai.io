import React from 'react';
import { useToggle } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';

import { Layout, Section, PageHeader } from '../components/layout';
import { Button } from '../components/button';
import { AboutSection } from '../components/about/about-section';
import { Experience } from '../components/about/experience';
import { Resume } from '../components/resume/resume';
import { SocialLinks } from '../components/social-links';

export const AnimateTransition = ({ children }) => {
  const variants = {
    enter: { opacity: 0, x: 800 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -800 },
  };
  return (
    <motion.div
      className='pb-4'
      initial='enter'
      animate='visible'
      exit='exit'
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const About = () => {
  const [resume, toggleResume] = useToggle(false);
  return (
    <Layout title='About'>
      <Section className='bg-real-white text-black'>
        <PageHeader
          title='About Kelvin'
          subtitle='Kelvin is a self taught full stack developer.'
        />
        <AboutSection />
      </Section>
      <Section className='bg-white text-black'>
        <div className='w-full lg:w-2/3 mx-auto pb-2 shadow bg-real-white'>
          <h3 className='text-center text-xl font-bold uppercase text-dark-purple'>
            Follow Me
          </h3>
          <SocialLinks className='flex justify-around' />
        </div>
        <Button onClick={toggleResume}>View as Resume</Button>
        <AnimatePresence exitBeforeEnter>
          <AnimateTransition key={resume ? 'resume' : 'experience'}>
            {resume ? <Resume /> : <Experience />}
          </AnimateTransition>
        </AnimatePresence>
      </Section>
    </Layout>
  );
};

export default About;
