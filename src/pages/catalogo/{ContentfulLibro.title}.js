/** @jsx jsx */
import { jsx, Themed, Button, Box } from "theme-ui"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { toast } from "react-hot-toast"
import Layout from "../../components/layout"
import slugify from "slugify"
import Seo from "../../components/seo"
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"

import { useCart } from "../../store"

function ShareButtons({ title, url, twitterHandle, tags }) {
  return (
    <div>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={30} round={true} />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon size={30} round={true} />
      </TwitterShareButton>
      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={30} round={true} />
      </TelegramShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={30} round={true} />
      </WhatsappShareButton>
    </div>
  )
}

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
      <div
        sx={{
          flexWrap: "wrap",
          display: "flex",
        }}>
        <div
          sx={{
            pr: [null, 3],
            flexGrow: 1,
            flexBasis: 320,
            display: "flex",
            alignItems: "flex-start",
          }}>
          <GatsbyImage
            image={current.image.gatsbyImageData}
            alt={current.title}
            objectFit="contain"
            sx={{ mx: "auto" }}
          />
        </div>
        <div
          sx={{
            flexGrow: 99999,
            flexBasis: 0,
            minWidth: 320,
          }}>
          <Themed.h2>{current.title}</Themed.h2>
          <Themed.h3 sx={{ mt: 1 }}>{current.authors[0]} © {current.year}</Themed.h3>
          <Themed.h5>
            {current.pages} páginas
            <br /> 
            ISBN: {current.isbn}
            <br />
            Formato: {current.height} x {current.width} cm.
          </Themed.h5>
          <Themed.h3>Valor impreso: <b>${current.price}</b></Themed.h3>
          <Box sx={{ bg: "#E8E8E8", p: 4, marginBottom: 4 }}>
            Reseña:
            <MDXRenderer>
              {current.description.childMdx.body}
            </MDXRenderer>
            <ShareButtons sx={{ textAlign: "right" }} title={current.title} url={ "editorialderiva.org/catalogo/" + slugify(current.title.toLowerCase())} />
          </Box>
          <Button
            onClick={() => {
              addToCart({ ...current, quantity: 1 })
              toast.success(current.title)
            }}
          >
            Agregar al carro
          </Button>
        </div>
      </div>
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
