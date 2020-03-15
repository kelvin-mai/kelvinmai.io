const fs = require('fs');
const slugify = require('slugify');
const courses = require('./src/data/courses');

const data = courses.map(course => ({
  ...course,
  slug: slugify(course.title.toLowerCase()),
}));

// fs.writeFileSync('./src/data/courses.json', JSON.stringify(data));
