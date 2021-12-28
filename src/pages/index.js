/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = props => (
  <Layout {...props}>
    <Seo title="inicio" />
  </Layout>
)

export default IndexPage
