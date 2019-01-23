import React, { Component } from 'react'
import { graphql, navigate } from 'gatsby'
import { Segment, Container, Image, Header, Divider, Icon, List } from 'semantic-ui-react'

class BookTemplate extends Component {
  render() {
    const {
      id,
      title,
      author,
      cover,
      original,
      collection,
      genre,
      pages,
      link,
      price,
      abstract
    } = this.props.data.contentfulBook
    return (
      <Segment inverted vertical style={{ minHeight: '100vh' }}>
        <Container>
          <Image src={cover.resize.src} alt={id} floated="left"  rounded />
          <Header inverted>
            {title}
            <Header.Subheader>{author}</Header.Subheader>
            <Header.Subheader>{pages} págs | {genre}</Header.Subheader>
            <Header.Subheader>Colección <b>{collection}</b></Header.Subheader>

            <Divider />
          </Header>
          {abstract.content.map((paragraph, index) => {
            return (
              <p
                key={index}
                style={{
                  textAlign: 'justify',
                }}
              >
                {paragraph.content[0].value.trim()}
              </p>
            )
          })}
          <List.Item>Publicación original: « {original} »</List.Item>
          <Divider />

            <List.Item></List.Item>
            <List.Item>Valor impreso: ${price}</List.Item>
            <List.Item><a href={link} target="_blank" rel="noopener noreferrer"><Icon name='download' />Versión digital</a></List.Item>


          <Header inverted onClick={() => navigate('/catalog')}>back to Catalog</Header>
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
      original
      collection
      genre
      pages
      price
      link
      cover {
        resize(width: 400, resizingBehavior: THUMB) {
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
