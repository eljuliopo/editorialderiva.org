import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

class BookTemplate extends Component {
  render() {
    const {
      id,
      title,
      author,
      cover,
      abstract,
    } = this.props.data.contentfulBook
    return (
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <img src={cover.resize.src} alt={id} />
        {documentToHtmlString(JSON.parse(abstract.abstract))}
        <a href="/catalog">back to Catalog</a>
      </div>
    )
  }
}

export default BookTemplate

export const pageQuery = graphql`
  query bookQuery($id: String!) {
    contentfulBook(id: { eq: $id }) {
      id
      title
      author
      cover {
        resize(width: 200, resizingBehavior: THUMB) {
          src
        }
      }
      abstract {
        content {
          content {
            value
          }
        }
        internal {
          content
        }
        abstract
      }
    }
  }
`
