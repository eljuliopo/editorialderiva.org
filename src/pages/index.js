/** @jsx jsx */
import { jsx, Themed, Grid, Box, Button, useThemeUI } from "theme-ui"
import { graphql, navigate, Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/logo"
import Seo from "../components/seo"
import ItemCard from "../components/item-card"
import BlogRoll from "../components/blogroll"
import Water from "../components/water"

const Hero = ({ site }) => {
  const { theme } = useThemeUI()
  return (
    <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <div sx={{ position: "absolute", width: "100%", height: "100%" }}>
        <Water />
      </div>
      <div sx={{ height: "100%", width: "100%", display: "flex", p: 3 }}>
        <div
          sx={{ my: "auto", textAlign: "center", maxWidth: 540, mx: "auto" }}
        >
          <Logo
            sx={{ position: "relative", maxWidth: 320 }}
            color={theme.colors.background}
          />
          <Themed.p
            sx={{
              zIndex: 10,
              position: "relative",
              userSelect: "none",
              color: "background",
            }}
          >
            {site.siteMetadata.description}
          </Themed.p>
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
            Nuestro catálogo
          </Button>
        </div>
      </div>
    </div>
  )
}

const NewItems = ({ items }) => {
  return (
    <div sx={{ mt: 5 }}>
      <Themed.h1>Lo último de nuestro catálogo</Themed.h1>
      <Themed.p>
        Kick off your next, great Gatsby project with this default starter.
      </Themed.p>
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
              .
            </Themed.p>
          </Box>
        </Grid>
      </div>
    </div>
  )
}

const NewPosts = ({ items }) => {
  return (
    <div sx={{ mt: 5 }}>
      <Themed.h1 sx={{ textAlign: "center" }}>Visita nuestro blog</Themed.h1>
      <Themed.p sx={{ textAlign: "center" }}>
        Kick off your next, great Gatsby project with this default{" "}
        <Themed.a as={Link} to="/blog">
          blog
        </Themed.a>
        .
      </Themed.p>
      <BlogRoll items={items} />
      <Themed.p sx={{ textAlign: "center" }}>
        Revisa todas nuestras publicaciones{" "}
        <Themed.a as={Link} to="/blog">
          aquí
        </Themed.a>
        .
      </Themed.p>
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
