/** @jsx jsx */
import { jsx, Grid, Themed, Box } from "theme-ui"
import { graphql } from "gatsby"

import Item from "../../components/item-small"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function CatalogPage({ data, ...props }) {
  const items = data.allContentfulLibro.nodes
  return (
    <Layout {...props}>
      <Seo title={"Nuestro catálogo"} />
      <Box sx={{ maxWidth: "blog", mx: "auto" }}>
        <Themed.h2>Todos nuestros libros</Themed.h2>
        <Grid variant="primary" columns={[1, 3]}>
          {items.map(item => (
            <Item key={item.contentful_id} data={item} />
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query LibrosQuery {
    allContentfulLibro {
      nodes {
        contentful_id
        id
        title
        authors
        price
        image {
          gatsbyImageData
        }
      }
    }
  }
`
