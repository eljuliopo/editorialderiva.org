import React, { Component } from 'react'
import { graphql, navigate } from 'gatsby'
import { Segment, Container, Image, Header } from 'semantic-ui-react'

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
      <Segment inverted vertical style={{ minHeight: '100vh' }}>
        <Container>
          <Image size="large" src={cover.resize.src} alt={id} floated="left" />
          <Header as="h3" style={{ fontSize: '2em' }} inverted>
            {title}
            <Header.Subheader>{author}</Header.Subheader>
          </Header>
          {abstract.content.map((paragraph, index) => {
            return (
              <p
                key={index}
                style={{
                  textAlign: 'justify',
                  fontSize: '1.33em',
                }}
              >
                {paragraph.content[0].value.trim()}
              </p>
            )
          })}
          <Header onClick={() => navigate('/catalog')}>back to Catalog</Header>
        </Container>
      </Segment>
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
        resize(width: 480, resizingBehavior: THUMB) {
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
