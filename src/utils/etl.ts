require('dotenv/config');
import * as path from 'path';
import * as fs from 'fs';
import axios from 'axios';
import slugify from 'slugify';

import { sortByDate, toJSON } from './funcs';

const courses = require('../data/courses');
const tutorials = require('../data/tutorials');

const insertTutorial = tutorial => {
  const data = sortByDate([tutorial, ...tutorials], {
    dateProp: 'publishedAt',
  });
  const json = toJSON(data);
  fs.writeFileSync(path.resolve(__dirname, '../data/tutorials.json'), json);
};

const insertCourse = course => {
  const data = sortByDate([course, ...courses], { dateProp: 'lastUpdated' });
  const json = toJSON(data);
  fs.writeFileSync(path.resolve(__dirname, '../data/courses.json'), json);
};

const createCourse = ({ title, videos, pid }) => {
  const slug = slugify(title);
  const lastUpdated = new Date(
    Math.max(...videos.map(v => new Date(v.publishedAt)))
  );
  return {
    title,
    slug,
    pid,
    lastUpdated,
    image: `${slug}.jpg`,
    videos,
  };
};

const coursesFromYT = async ({ length, title, pid }) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&maxResults=${length}&channelId=${process.env.CHANNEL_ID}&key=${process.env.API_KEY}`
  );
  const items = data.items
    .filter(item => item.id.kind === 'youtube#video')
    .map(({ id: { videoId }, snippet: { publishedAt, title } }) => ({
      videoId,
      publishedAt,
      title,
    }));
  const videos = sortByDate(items, { dateProp: 'publishedAt' })
    .reverse()
    .map(({ videoId, title, publishedAt }, i) => ({
      ordinance: i,
      videoId,
      title,
      publishedAt,
    }));
  const course = createCourse({
    title,
    pid,
    videos,
  });
  insertCourse(course);
};

// fs.writeFileSync(
//   './src/data/courses.json',
//   toJSON(sortByDate(data, 'lastUpdated'))
// );

// fs.writeFileSync('./src/data/courses.json', toJSON(data));

/*
// node etl.js

insertTutorial({
  videoId: 'r0TP4DdXeIk',
  title: 'Swagger in NestJS',
  publishedAt: new Date('March 26'),
});

coursesFromYT({
  length: 14,
  title: 'NestJS Blog API',
  pid: 'PLBeQxJQNprbjZL5iguWelcxlmWvY4Dmdj',
});
*/
