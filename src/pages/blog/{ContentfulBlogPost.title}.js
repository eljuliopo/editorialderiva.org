/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default function BlogPost(props) {
  const post = props.data.contentfulBlogPost
  return (
    <Layout {...props}>
      <Seo title={post.title} />
      <div sx={{ maxWidth: "blog", mx: "auto", px: 3 }}>
        <h1 sx={{ mb: 0 }}>{post.title}</h1>
        <small sx={{ fontWeight: "bold" }}>{post.date}</small>
        <MDXRenderer>{post.content.childMdx.body}</MDXRenderer>
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
