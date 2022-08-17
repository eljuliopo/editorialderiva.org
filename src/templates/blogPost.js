/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import slugify from "slugify"
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
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

      <TelegramShareButton url={url}>
        <TelegramIcon size={30} round={true} />
      </TelegramShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={30} round={true} />
      </RedditShareButton>

      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={30} round={true} />
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
        <small sx={{ fontWeight: "bold" }}>por {post.author}, {post.date}</small>
        <MDXRenderer>{post.content.childMdx.body}</MDXRenderer>

        <Themed.h3 sx={{ mt: 4 }}>
          ¿Te gustó lo que leíste?, compártelo 👇
        </Themed.h3>
        <ShareButtons title={post.title} url={props.location.href} />

        <Themed.h3 sx={{ mt: 4 }}>También podría interesarte:</Themed.h3>
        {next && (
          <div>
            <Themed.h2 sx={{ mb: 0 }}>
              <Link
                to={"/blog/" + slugify(next.title, { lower: true })}
                sx={t => t.styles.a}
              >
                {next.title}
              </Link>
            </Themed.h2>
            <small sx={{ mt: 0, fontWeight: "bold" }}>por {next.author}, {next.date}</small>
          </div>
        )}
        {prev && (
          <div>
            <Themed.h2 sx={{ mb: 0 }}>
                <Link
                to={"/blog/" + slugify(prev.title, { lower: true })}
                sx={t => t.styles.a}
                >
                   {prev.title}
                </Link>
            </Themed.h2>
            <small sx={{ mt: 0, fontWeight: "bold" }}>por {prev.author}, {prev.date}</small>
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
      author
      date(formatString: "YYYY", locale: "es")
      content {
        childMdx {
          body
        }
      }
    }
  }
`
