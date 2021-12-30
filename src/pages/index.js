/** @jsx jsx */
import { jsx, Themed, Grid, Box, Button } from "theme-ui"
import { graphql, navigate, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import slugify from "slugify"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ItemCard from "../components/item-card"
import olitas from "../images/sea2.gif"
import Water from "../components/water"

const Hero = ({ site }) => {
  return (
    <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <div
        sx={{ zIndex: -1, position: "absolute", width: "100%", height: "100%" }}
      >
        <Water />
      </div>
      {/* <img
        sx={{
          position: "absolute",
          objectFit: "cover",
          width: "100%",
          height: "100%",
          zIndex: -1,
          filter: "invert(1) contrast(1.1) grayscale(1)",
        }}
        src={olitas}
        alt="editorial deriva"
      /> */}
      <div
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          p: 3,
        }}
      >
        <div
          sx={{ my: "auto", textAlign: "center", maxWidth: 540, mx: "auto" }}
        >
          <StaticImage
            src="../images/logo.svg"
            width={320}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt={site.siteMetadata.title}
            // sx={{ my: 3 }}
            placeholder="none"
            // formats={["auto", "webp", "avif"]}
          />
          <Themed.p>{site.siteMetadata.description}</Themed.p>
          <Button onClick={() => navigate("/catalogo")}>
            Nuestro catálogo
          </Button>
        </div>
      </div>
    </div>
  )
}

const NewItems = ({ items }) => {
  return (
    <div sx={{ py: 4 }}>
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
    <div sx={{ py: 4 }}>
      <Themed.h1 sx={{ textAlign: "center" }}>Visita nuestro blog</Themed.h1>
      <Themed.p sx={{ textAlign: "center" }}>
        Kick off your next, great Gatsby project with this default starter.
      </Themed.p>
      <ul
        sx={{
          listStyle: "none",
          mx: "auto",
          px: 3,
          py: 4,
          maxWidth: "blog",
        }}
      >
        {items.map(post => {
          post.slug = "/blog/" + slugify(post.title.toLowerCase())
          return (
            <li
              key={post.id}
              sx={{
                mb: 5,
              }}
            >
              <Themed.h2
                sx={{
                  m: 0,
                }}
              >
                <Link
                  to={post.slug}
                  sx={{
                    color: "inherit",
                    textDecoration: "none",
                    ":hover,:focus": {
                      color: "primary",
                      textDecoration: "underline",
                    },
                  }}
                >
                  {post.title}
                </Link>
              </Themed.h2>
              <small sx={{ fontWeight: "bold" }}>{post.date}</small>
              <Themed.p sx={{ mt: 3, position: "relative" }}>
                {post.description}
                <Themed.a
                  as={Link}
                  to={post.slug}
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: -4,
                  }}
                >
                  Ir al artículo.
                </Themed.a>
              </Themed.p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const IndexPage = ({ data, ...props }) => {
  const { site, allContentfulLibro, allContentfulBlogPost } = data
  return (
    <Layout {...props}>
      <Seo title="inicio" />

      <Hero site={site} />

      <NewItems items={allContentfulLibro.nodes} />

      <NewPosts items={allContentfulBlogPost.nodes} />
    </Layout>
  )
}

export default IndexPage

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
    allContentfulBlogPost(limit: 3, sort: { order: DESC, fields: date }) {
      nodes {
        id
        title
        date(formatString: "D MMMM YYYY", locale: "es")
        description
      }
    }
  }
`
