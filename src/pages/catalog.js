import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class Catalog extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBook.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          {posts.map(({ node }) => {
            return (
              <div key={node.id}>
                <Link to={'/' + node.id}>
                  <img src={node.cover.resize.src} alt={node.id} />
                  <h1>{node.title}</h1>
                  <p>{node.author}</p>
                </Link>
              </div>
            )
          })}
          <Link
            style={{
              position: 'fixed',
              top: '10px',
              right: '10px',
            }}
            to="/"
          >
            Home
          </Link>
        </div>
      </div>
    )
  }
}

export default Catalog

export const pageQuery = graphql`
  query CatalogQuery {
    allContentfulBook {
      edges {
        node {
          id
          title
          author
          cover {
            resize(width: 200, resizingBehavior: THUMB) {
              src
            }
          }
        }
      }
    }
  }
`
