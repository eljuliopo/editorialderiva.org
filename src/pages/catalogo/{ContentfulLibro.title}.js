/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { toast } from "react-hot-toast"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

import { useCart } from "../../store"

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
      <GatsbyImage
        image={current.image.gatsbyImageData}
        alt={current.title}
        objectFit="contain"
        sx={{ mx: "auto", cursor: "pointer" }}
      />
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
      <Button
        onClick={() => {
          addToCart(current)
          toast.success(current.title)
        }}
      >
        Agregar al carro
      </Button>
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
