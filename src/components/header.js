/** @jsx jsx */
import { jsx, Container, Themed, Flex } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Headroom from "react-headroom"

const Logo = ({ title }) => (
  <Themed.a as={Link} to="/">
    <StaticImage
      src="../images/logo.svg"
      width={120}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt={title}
      sx={{ my: 3 }}
      placeholder="none"
    />
  </Themed.a>
)

const HeaderMenu = () => (
  <Flex sx={{ alignItems: "center" }}>
    <Themed.h4 sx={{ my: 0, display: ["none", "initial"] }}>
      <Themed.a as={Link} to="/nosotros">
        nosotros
      </Themed.a>
    </Themed.h4>
    <Themed.h4 sx={{ my: 0, display: ["none", "initial"], ml: 3 }}>
      <Themed.a as={Link} to="/catalogo">
        catalogo
      </Themed.a>
    </Themed.h4>
    <Themed.h4 sx={{ my: 0, display: ["none", "initial"], ml: 3 }}>
      <Themed.a as={Link} to="/contacto">
        contacto
      </Themed.a>
    </Themed.h4>
    <Themed.h4 sx={{ my: 0, ml: 3 }}>
      <Themed.a as={Link} to="/carrito">
        carrito
      </Themed.a>
    </Themed.h4>
    <Themed.h4 sx={{ my: 0, display: [null, "none"], ml: 3 }}>
      <Themed.a as={Link} to={false}>
        menu
      </Themed.a>
    </Themed.h4>
  </Flex>
)

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Headroom>
      <header sx={{ variant: "layout.header" }}>
        <Container>
          <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Logo title={site.siteMetadata.title} />
            <HeaderMenu />
          </Flex>
        </Container>
      </header>
    </Headroom>
  )
}

export default Header
