import 'dotenv/config';
import * as path from 'path';
import * as fs from 'fs';
import axios from 'axios';

import { toJSON } from './utils/funcs';
import { createEducation, createWork } from './utils/resume';
import {
  createCourse,
  createCourseVideoYT,
  createTutorial,
} from './utils/videos';

const [resume] = require('./data/resume.json');
const courses = require('./data/courses.json');
const tutorials = require('./data/tutorials.json');

const write = (file: string, data: any) =>
  fs.writeFileSync(
    path.resolve(__dirname, `./data/${file}.json`),
    toJSON(data)
  );

const getLatestVideos = async (length: number = 1) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&maxResults=${length}&channelId=${process.env.CHANNEL_ID}&key=${process.env.API_KEY}`
  );
  return data;
};

// write interactive code below
// yarn etl || npm run etl
const etl = async () => {
  const fromYT = await getLatestVideos(8);
  const videos = fromYT.items
    .reverse()
    .filter(v => v.id.videoId !== 'Vh_Oy2DHJlI')
    .map(createCourseVideoYT);
  const data = createCourse({
    title: 'React Conduit',
    videos,
    pid: 'PLBeQxJQNprbhO7-QgNP2JLicOyUuNdy5T',
    tags: ['React', 'Overmind', 'reach router', 'Bootstrap', 'Typescript'],
    description:
      'Learn a different React stack, this frontend framework uses Overmind for state management and @reach/router for navigation.',
  });
  console.log([data, ...courses]);
  // write('courses', [data, ...courses]);
};
etl();
