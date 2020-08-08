const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug =
      node.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: `pages` }).replace(
        "README/",
        ""
      );

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      allPrismicOrganization {
        edges {
          node {
            uid
          }
        }
      }
      allPrismicProject {
        edges {
          node {
            data {
              organization {
                uid
              }
            }
            uid
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }
  
  const posts = result.data.allMarkdownRemark.edges;
  const postsTemplate = path.resolve(`./src/templates/post.js`);

  const organizationsPages = result.data.allPrismicOrganization.edges;
  const organizationTemplate = path.resolve("src/templates/org.js");

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postsTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });

  organizationsPages.forEach(edge => {
    createPage({
      path: `orgs/${edge.node.uid}`,
      component: organizationTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
};
