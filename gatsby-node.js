/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const BLOG_POST_FILENAME_REGEX = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)\.md$/

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode, basePath: `pages` })
    if (node.frontmatter.layout && node.frontmatter.layout !== 'sidebar') {
      if (node.frontmatter.layout === 'post') {
        const { relativePath } = getNode(node.parent)
        const match = BLOG_POST_FILENAME_REGEX.exec(relativePath)
        const year = match[1]
        const month = match[2]
        const day = match[3]
        const filename = match[4]
        slug = `/${year}/${month}/${day}/${filename}`
      }

      createNodeField({
        node,
        name: `slug`,
        value:
          node.frontmatter.layout === 'page'
            ? `/${node.frontmatter.sidebar.toLowerCase()}/`
            : slug,
      })

      createNodeField({
        node,
        name: `layout`,
        value: node.frontmatter.layout,
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          filter: { frontmatter: { layout: { ne: "sidebar" } } }
        ) {
          edges {
            node {
              fields {
                slug
                layout
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component:
            node.fields.layout === 'page'
              ? path.resolve(`./src/templates/PageTemplate.js`)
              : path.resolve(`./src/templates/PostTemplate.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
