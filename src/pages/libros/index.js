/** @jsx jsx */
import { jsx, Themed, Grid } from "theme-ui"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ItemCard from "../../components/item-card"

export default function CatalogPage({ data, ...props }) {
  const { nodes } = data.allContentfulLibro
  return (
    <Layout {...props}>
      <Seo title={"Nuestro catálogo"} />
      <Themed.h2>Nuestro catálogo</Themed.h2>
      <Grid variant="primary" columns={[1, 2]}>
        {nodes.map(item => (
          <ItemCard key={item.contentful_id} data={item} />
        ))}
      </Grid>
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
