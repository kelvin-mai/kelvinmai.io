const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
  type TutorialLinksJson implements Node {
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
  if (node.internal.type === 'TutorialLinksJson' && node.thumbnail !== null) {
    const fileNode = await createRemoteFileNode({
      url: node.thumbnail,
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
