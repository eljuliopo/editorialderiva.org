/** @jsx jsx */
import { jsx, Grid, Box, Themed, Button } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { useCart } from "../../store"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function Libro(props) {
  const { addToCart } = useCart()
  const current = props.data.contentfulLibro
  return (
    <Layout {...props}>
      <Seo
        title={current.title}
        description={current.description.description.slice(0, 200) + "..."}
        path={props.path}
        image={current.image.gatsbyImageData.images.fallback.src}
        author={current.authors}
      />
      <Grid columns={[1, "1fr 2.4fr"]} variant="primary">
        <Box
          sx={{
            position: [null, "sticky"],
            alignSelf: [null, "start"],
            top: [null, 56],
          }}
        >
          <GatsbyImage
            image={current.image.gatsbyImageData}
            alt={current.title}
            objectFit="contain"
            sx={{ mx: "auto", cursor: "pointer" }}
          />
        </Box>
        <Box>
          <Themed.h2>{current.title}</Themed.h2>
          <Themed.h5 sx={{ mt: 1 }}>por {current.authors[0]}</Themed.h5>
          <Themed.h3>${current.price}</Themed.h3>
          <MDXRenderer>{current.description.childMdx.body}</MDXRenderer>
          <Themed.p>ISBN: {current.isbn} </Themed.p>
          <Themed.p>{current.pages} páginas</Themed.p>
          <Themed.p>
            {current.height} x {current.width} cm.
          </Themed.p>
          <Themed.p>{current.year}</Themed.p>
          <div
            sx={{
              display: "flex",
              flexDirection: ["column", "column", "row"],
              alignItems: ["stretch", "stretch", "center"],
            }}
          >
            <Button onClick={() => addToCart(current)}>Agregar al carro</Button>
          </div>
        </Box>
      </Grid>
    </Layout>
  )
}

export const itemQuery = graphql`
  query itemQuery($id: String) {
    contentfulLibro(id: { eq: $id }) {
      contentful_id
      title
      description {
        childMdx {
          body
        }
        description
      }
      authors
      price
      categories
      collections
      image {
        gatsbyImageData
      }
      isbn
      pages
      height
      width
      year
    }
  }
`
