const path = require('path');
const courses = require('./src/data/courses.json');
const tutorials = require('./src/data/tutorials.json');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
  type TutorialsJson implements Node {
    publishedAt: Date
    thumbnail: String
  }

  type CoursesVideo {
    videoId: String
  }

  type CoursesJson implements Node {
    videos: [CoursesVideo]
  }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  if (node.internal.type === 'TutorialsJson' && node.thumbnail !== null) {
    const fileNode = await createRemoteFileNode({
      url: `https://i.ytimg.com/vi/${node.videoId}/maxresdefault.jpg`,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    });
    if (fileNode) {
      node.thumbnailImage___NODE = fileNode.id;
    }
  }
  if (node.internal.type === 'CoursesVideo' && node.videoId !== null) {
    const fileNode = await createRemoteFileNode({
      url: `https://i.ytimg.com/vi/${node.videoId}/maxresdefault.jpg`,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    });
    if (fileNode) {
      node.thumbnail___NODE = fileNode.id;
    }
  }
};

exports.createPages = ({ actions: { createPage } }) => {
  // TODO course pages under construction
  /*
  courses.forEach(course => {
    createPage({
      path: `courses/${course.slug}`,
      component: path.resolve('./src/templates/course.tsx'),
      context: {
        image: course.image,
        videos: course.videos,
      },
    });
  });
  */

  tutorials.forEach(tutorial => {
    createPage({
      path: `tutorials/${tutorial.videoId}`,
      component: path.resolve('./src/templates/tutorial.tsx'),
      context: {
        videoId: tutorial.videoId,
      },
    });
  });
};
