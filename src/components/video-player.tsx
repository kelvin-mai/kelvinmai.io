import React from 'react';
import ReactPlayer from 'react-player';

export interface Props {
  videoId: string;
}

export const VideoPlayer: React.FC<Props> = ({ videoId }) => (
  <div className='video-container shadow-2xl rounded-lg overflow-hidden'>
    <ReactPlayer
      className='video-player'
      url={`https://www.youtube.com/watch?v=${videoId}`}
      width='100%'
      height='100%'
      controls
    />
  </div>
);
