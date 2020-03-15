import React from 'react';

import { Layout } from '../components/layout';
import { VideoPlayer } from '../components/video-player';

export const Video = () => (
  <Layout title='Video'>
    <div className='h-screen flex'>
      <div className='flex-grow'>
        <VideoPlayer videoId='J9m71iuSvlE' />
      </div>
      <div className='w-1/3 pl-4'></div>
    </div>
  </Layout>
);

export default Video;
