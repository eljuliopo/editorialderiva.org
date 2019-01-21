/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const bookTemplate = path.resolve('src/templates/book-template.js')
    resolve(
      graphql(`
        {
          allContentfulBook {
            edges {
              node {
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBook.edges.forEach(edge => {
          createPage({
            path: edge.node.id,
            component: bookTemplate,
            context: {
              id: edge.node.id,
            },
          })
        })
        return
      })
    )
  })
}
