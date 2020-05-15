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
  const fromYT = await getLatestVideos(3);
  const videos = fromYT.items
    .reverse()
    .map(v => createTutorial(v, ['NestJS', 'GraphQL']));
  console.log(videos.concat(tutorials));
  write('tutorials', videos.concat(tutorials));
};
etl();
