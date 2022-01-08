/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import slugify from "slugify"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"

import Layout from "../components/layout"
import Seo from "../components/seo"

function ShareButtons({ title, url, twitterHandle, tags }) {
  return (
    <div>
      <FacebookShareButton url={url}>
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={40} round={true} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
    </div>
  )
}

export default function BlogPost(props) {
  const post = props.data.contentfulBlogPost
  const { prev, next } = props.pageContext
  return (
    <Layout {...props}>
      <Seo title={post.title} />
      <div sx={{ maxWidth: "blog", mx: "auto" }}>
        <Themed.h1 sx={{ mb: 0 }}>{post.title}</Themed.h1>
        <small sx={{ fontWeight: "bold" }}>{post.date}</small>
        <MDXRenderer>{post.content.childMdx.body}</MDXRenderer>

        <Themed.h2>¿Te gustó lo que leíste? Compártelo</Themed.h2>
        <ShareButtons title={post.title} url={props.location.href} />

        <Themed.h2>Otros artículos de interés</Themed.h2>
        {next && (
          <div>
            <Themed.h1 sx={{ mb: 0 }}>
              <Themed.a
                as={Link}
                to={"/blog/" + slugify(next.title, { lower: true })}
              >
                {next.title}
              </Themed.a>
            </Themed.h1>
            <small sx={{ mt: 0, fontWeight: "bold" }}>{next.date}</small>
          </div>
        )}
        {prev && (
          <div>
            <Themed.h1 sx={{ mb: 0 }}>
              <Themed.a
                as={Link}
                to={"/blog/" + slugify(prev.title, { lower: true })}
              >
                {prev.title}
              </Themed.a>
            </Themed.h1>
            <small sx={{ mt: 0, fontWeight: "bold" }}>{prev.date}</small>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const blogPostQuery = graphql`
  query blogPostQuery($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      date(formatString: "D MMMM YYYY", locale: "es")
      content {
        childMdx {
          body
        }
      }
    }
  }
`
