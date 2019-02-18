import React from 'react'
import { StaticQuery, navigate, graphql } from 'gatsby'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import Helmet from 'react-helmet'

const Catalog = ({ mobile }) => (
  <StaticQuery
    query={graphql`
      query CatalogQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulBook {
          edges {
            node {
              id
              title
              author
              collection
              genre
              pages
              cover {
                resize(width: 600, height: 820, resizingBehavior: THUMB) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Segment inverted vertical>
        <Helmet title={data.site.siteTitle} />
        <Grid container centered columns={mobile ? 1 : 4}>
          {data.allContentfulBook.edges.map(({ node }) => {
            return (
              <Grid.Column key={node.id}>
              <Segment basic inverted onClick={() => navigate(`/${node.id}`)}>
                <Image
                    fluid
                    rounded
                    src={node.cover.resize.src}
                    alt={node.id} />

                  <Header inverted>
                    {node.title}
                    <Header.Subheader>{node.author}</Header.Subheader>
                    <Header.Subheader>{node.pages} págs | {node.genre}</Header.Subheader>
                    <Header.Subheader><b>{node.collection}</b></Header.Subheader>
                  </Header>
              </Segment>

              </Grid.Column>
            )
          })}
        </Grid>
        {console.log(mobile)}
      </Segment>
    )}
  />
)

export default Catalog
