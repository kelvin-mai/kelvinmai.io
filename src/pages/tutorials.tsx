import React from 'react';

import { Layout, PageHeader, Section } from '../components/layout';
import { TutorialList } from '../components/tutorials/tutorial-list';

export const Tutorials = () => (
  <Layout title='Tutorials'>
    <Section>
      <PageHeader title='Tutorials' subtitle='All of my video tutorials' />
      <TutorialList />
    </Section>
  </Layout>
);

export default Tutorials;
