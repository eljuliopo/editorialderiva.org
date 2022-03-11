/** @jsx jsx */
import { jsx, Themed, Grid, Box, Button, useThemeUI, Divider } from "theme-ui"
import { graphql, navigate, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ItemCard from "../components/item-card"
import BlogRoll from "../components/blogroll"
import Water from "../components/water"
import React from "react"

const Hero = ({ site }) => {
  const { theme } = useThemeUI()
  return (
    <React.Fragment>
      <div
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      >
        <Water />
      </div>
      <div
        style={{
          height: "calc(100vh - 48px)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div sx={{ height: "100%", width: "100%", display: "flex", p: 2 }}>
          <div sx={{ my: 100, textAlign: "center", maxWidth: 540, mx: "auto" }}>
            <Themed.h3
              sx={{
                zIndex: 10,
                position: "relative",
                userSelect: "none",
                color: "background",
              }}
            >
              {site.siteMetadata.description}
              
            </Themed.h3>
            <Themed.h5
              sx={{
                color:"background",
              }}>
              {site.siteMetadata.location}
            </Themed.h5>
            <Button
              sx={{
                zIndex: 10,
                position: "relative",
                userSelect: "none",
                m: 2,
              }}
              onClick={() => navigate("/nosotros")}
            >
              ¿Quienes somos?
            </Button>
            <Button
              variant="inverted"
              sx={{
                zIndex: 10,
                position: "relative",
                userSelect: "none",
                m: 2,
              }}
              onClick={() => navigate("/catalogo")}
            >
              Catálogo de libros
            </Button>
          </div>
          
        </div>
      </div>
    </React.Fragment>
  )
}

const NewItems = ({ items }) => {
  return (
    <div sx={{ mt: 5 }}>
      <Themed.h1 id="last" sx={{textAlign:'center'}}>Últimas publicaciones</Themed.h1>
      <div sx={{ textAlign: "center" }}>
        <Grid variant="primary" sx={{ maxWidth: 960, mx: "auto" }}>
          {items.map(item => (
            <ItemCard key={item.contentful_id} data={item} />
          ))}
          <Box sx={{ gridColumn: [null, 2, null, 4], display: "flex" }}>
            <Themed.p sx={{ m: "auto" }}>
              Esto y más en{" "}
              <Themed.a as={Link} to="/catalogo">
                nuestro catálogo
              </Themed.a>
            </Themed.p>
            <Divider />
          </Box>
        </Grid>
      </div>
    </div>
    
  )
}

const NewPosts = ({ items }) => {
  return (
    <div sx={{ mt: 5 }}>
      <Divider variant='string' sx={{ marginX: 500 }} />
      <Themed.h1 sx={{ textAlign: "center" }}>Notas</Themed.h1>
      <BlogRoll items={items} />
      <Themed.p sx={{ textAlign: "center", mt: "10" }}>
        Todas las publicaciones{" "}
        <Themed.a as={Link} to="/blog">
          acá
        </Themed.a>
      </Themed.p>
      <Divider variant='string' sx={{ marginX: 500 }} />
    </div>
  )
}

export default function IndexPage({ data, ...props }) {
  const { site, allContentfulLibro, allContentfulBlogPost } = data
  return (
    <Layout {...props}>
      <Seo title="Inicio" />
      <Hero site={site} />
      <NewItems items={allContentfulLibro.nodes} />
      <NewPosts items={allContentfulBlogPost.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        location
      }
    }
    allContentfulLibro(limit: 3) {
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
    allContentfulBlogPost(limit: 2, sort: { order: DESC, fields: date }) {
      nodes {
        id
        title
        date(formatString: "D MMMM YYYY", locale: "es")
        description
      }
    }
  }
`
