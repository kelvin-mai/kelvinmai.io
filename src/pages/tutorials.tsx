import React from 'react';
import { Layout } from '../components/layout/layout';

import { TutorialList } from '../components/tutorials/tutorial-list';

export const Tutorials = () => (
  <Layout title='Tutorials'>
    <TutorialList />
  </Layout>
);

export default Tutorials;
