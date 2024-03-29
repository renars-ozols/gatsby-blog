const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.sourceNodes = ({ actions, getNodesByType }) => {
  const { createNodeField } = actions
  // get all page view nodes from google analytics, then filter out markdown nodes
  // where slug matches by page view node's path
  // then for each of those nodes create field with view count
  const pageViewNodes = getNodesByType(`PageViews`)
  getNodesByType(`MarkdownRemark`)
    .filter(node =>
      pageViewNodes.find(node2 => node2.path === node.fields.slug)
    )
    .forEach(node => {
      const pVnode = pageViewNodes.find(
        node2 => node2.path === node.fields.slug
      )
      createNodeField({
        node,
        name: `views`,
        value: pVnode.totalCount,
      })
    })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")
  const tagTemplate = path.resolve("src/templates/tags.js")
  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.postsRemark.edges
  // Create post detail pages
  posts.forEach(({ node }, index) => {
    const prev = index === 0 ? false : posts[index - 1].node
    const next = index === posts.length - 1 ? false : posts[index + 1].node
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        id: node.id,
        prev,
        next,
      },
    })
  })
  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
