import React, { Component } from 'react'
import { graphql, navigate } from 'gatsby'
import { Segment, Container, Image, Header, Divider, Icon, List, Grid} from 'semantic-ui-react'

class BookTemplate extends Component {
  render() {
    const {
      id,
      title,
      author,
      collection,
      original,
      cover,
      genre,
      pages,
      link,
      price,
      binding,
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
            <Header.Subheader>Colección <b>{collection.nameCollection}</b></Header.Subheader>

            <Divider />
          </Header>
          {abstract.content.map((paragraph, index) => {
            return (
              <p
                key={index}
                style={{
                  textAlign: 'left',
                  fontSize: '1em',
                }}
              >
                {paragraph.content[0].value.trim()}
              </p>
            )
          })}
        <Divider />

          <Grid columns={2} inverted relaxed='very' stackable>
            <Grid.Column>
              <List.Item>
              Primera publicación:
              </List.Item>
              <List.Item>
              « {original.originalTitle} » por {original.originalEditorial}, {original.originalYear}
              </List.Item>
            </Grid.Column>
            <Grid.Column>
              <List.Item></List.Item>
              <List.Item>Valor impreso: ${price}</List.Item>
              <List.Item>{pages} págs {binding}</List.Item>
              <List.Item><a href={link} target="_blank" rel="noopener noreferrer"><Icon name='download' />Versión digital</a></List.Item>

            </Grid.Column>

          </Grid>

          <Divider />


          <Header as='h4' inverted textAlign='right' onClick={() => navigate('/catalog')}><Icon name='long arrow alternate left' size='mini' />Volver al catálogo</Header>
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
      genre
      original {
          originalTitle
          originalEditorial
          originalYear
      }
      collection {
        nameCollection
      }
      pages
      price
      link
      binding
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
