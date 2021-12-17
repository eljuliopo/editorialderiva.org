import React, { useState } from "react"
import { graphql } from "gatsby"
import { useCart } from "../../store"

// import Item from "../../components/item-template"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function Libro(props) {
  const [quantity, updateQuantity] = useState(1)
  const increment = () => updateQuantity(quantity + 1)
  const decrement = () => (quantity === 1 ? null : updateQuantity(quantity - 1))
  const { addToCart, cart } = useCart()
  const current = props.data.contentfulLibro
  console.log(current)
  return (
    <Layout {...props}>
      <Seo
        title={current.title}
        description={current.description.description.slice(0, 200) + "..."}
        path={props.path}
        image={current.image.gatsbyImageData.images.fallback.src}
        author={current.authors}
      />
      <div
        data={current}
        quantity={quantity}
        increment={() => increment()}
        decrement={() => decrement()}
        addToCart={() => addToCart({ ...current, quantity })}
      />
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
