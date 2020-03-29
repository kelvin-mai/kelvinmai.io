require('dotenv/config');
const fs = require('fs');
const axios = require('axios');
const prettier = require('prettier');
const slugify = require('slugify');

const courses = require('./src/data/courses');
const tutorials = require('./src/data/tutorials');

const toJSON = data =>
  prettier.format(JSON.stringify(data), { parser: 'json' });

const sortByDate = (arr, date) =>
  arr.sort((a, b) => new Date(b[date]) - new Date(a[date]));

const insertTutorial = tutorial => {
  const data = sortByDate([tutorial, ...tutorials], 'publishedAt');
  const json = toJSON(data);
  fs.writeFileSync('./src/data/tutorials.json', json);
};

const insertCourse = course => {
  const data = sortByDate([course, ...courses], 'lastUpdated');
  const json = toJSON(data);
  fs.writeFileSync('./src/data/courses.json', json);
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
  const videos = sortByDate(items, 'publishedAt')
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
