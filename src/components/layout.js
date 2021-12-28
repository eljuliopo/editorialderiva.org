/** @jsx jsx */
import { jsx, Container, Themed } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import { Toaster } from "react-hot-toast"

import Header from "./header"

const Layout = ({ children, ...props }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div sx={{ variant: "layout.root" }}>
      <Toaster />
      <Header
        isHome={props.path === "/"}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <main sx={{ variant: "layout.main" }}>
        <Container>{children}</Container>
      </main>
      <footer sx={{ variant: "layout.footer" }}>
        <Container>
          © {new Date().getFullYear()}, Built with{" "}
          <Themed.a href="https://www.gatsbyjs.com">Gatsby</Themed.a>
        </Container>
      </footer>
    </div>
  )
}

export default Layout
