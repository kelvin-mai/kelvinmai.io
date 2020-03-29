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
    ('https://i.ytimg.com/vi/yVk_ImBQqms/maxresdefault.jpg');
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
};

exports.createPages = ({ actions: { createPage } }) => {
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
