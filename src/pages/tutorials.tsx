import React from 'react';

import { Layout } from '../components/layout/layout';
import { PageHeader } from '../components/page-header';
import { TutorialList } from '../components/tutorials/tutorial-list';

export const Tutorials = () => (
  <Layout title='Tutorials'>
    <PageHeader title='Tutorials' subtitle='All of my video tutorials' />
    <TutorialList />
  </Layout>
);

export default Tutorials;
