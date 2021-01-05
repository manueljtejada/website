const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/blog-post.tsx");
  const projectTemplate = path.resolve("src/templates/project.tsx");

  const postsQuery = await graphql(`
    query {
      posts: allPrismicBlogPost {
        nodes {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  `);

  const projectsQuery = await graphql(`
    query {
      projects: allPrismicProject {
        nodes {
          uid
          data {
            title {
              text
            }
          }
        }
      }
    }
  `);

  postsQuery.data.posts.nodes.forEach((node) => {
    createPage({
      path: `blog/${node.uid}`,
      component: blogPostTemplate,
      context: {
        title: node.data.title,
        slug: node.uid,
      },
    });
  });

  projectsQuery.data.projects.nodes.forEach((node) => {
    createPage({
      path: `projects/${node.uid}`,
      component: projectTemplate,
      context: {
        title: node.data.title,
        slug: node.uid,
      },
    });
  });
};
