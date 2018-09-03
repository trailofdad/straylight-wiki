const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const select = require('unist-util-select')
const fs = require('fs-extra')

exports.modifyBabelrc = ({ babelrc }) => ({
  ...babelrc,
  plugins: babelrc.plugins.concat(
    ['transform-regenerator'],
    ['transform-runtime']
  ),
})

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  if (process.env.NODE_ENV === 'development') {
    process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
  }

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const protocolPost = path.resolve('./src/templates/protocol-post.js')
    const protocolTag = path.resolve('./src/templates/protocol-tag.js')

    resolve([
      // All static pages
      graphql(
        `
          {
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allMarkdownRemark.edges, edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path,
            },
          })
        })
      }),

      // All Ghost posts
      graphql(
        `
          {
            allGhostPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create page for each post
        _.each(result.data.allGhostPost.edges, edge => {
          createPage({
            path: `/protocol/${edge.node.slug}`,
            component: protocolPost,
            context: {
              slug: edge.node.slug,
            },
          })
        })
      }),

      // All Ghost tags
      graphql(
        `
          {
            allGhostTag {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create page for each tag
        _.each(result.data.allGhostTag.edges, edge => {
          createPage({
            path: `/protocol/${edge.node.slug}`,
            component: protocolTag,
            context: {
              slug: edge.node.slug,
            },
          })
        })
      }),
    ])
  })
}
