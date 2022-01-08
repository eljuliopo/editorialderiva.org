/** @jsx jsx */
import { jsx, Container, Themed, Flex } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Headroom from "react-headroom"
import React from "react"
import { useStore } from "../store/state"

const Logo = ({ title }) => (
  <Themed.a as={Link} to="/">
    <StaticImage
      src="../images/logo.svg"
      width={120}
      quality={100}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt={title}
      sx={{ my: 3, userSelect: "none" }}
      placeholder="none"
    />
  </Themed.a>
)

const menuItems = [
  {
    name: "Nosotros",
    to: "/nosotros",
  },
  {
    name: "Catálogo",
    to: "/catalogo",
  },
  // {
  //   name: "Contacto",
  //   to: "/contacto",
  // },
  {
    name: "Blog",
    to: "/blog",
  },
]

function Mobile() {
  const { isMenuOpen, toggleMenu } = useStore()
  return (
    <React.Fragment>
      <Themed.h4
        sx={{
          userSelect: "none",
          my: 0,
          display: [null, "none"],
          ml: 3,
        }}
      >
        <Themed.a href="#" onClick={toggleMenu}>
          Menu
        </Themed.a>
      </Themed.h4>
      <div
        sx={{
          transition: ".8s",
          overflow: "hidden",
          textAlign: "right",
          bg: "background",
          position: "fixed",
          px: 3,
          top: isMenuOpen ? 57 : -1000,
          right: 0,
          display: [null, "none"],
        }}
      >
        {menuItems.map(({ name, to }, idx) => (
          <Themed.h4 key={idx}>
            <Themed.a as={Link} to={to} onClick={toggleMenu}>
              {name}
            </Themed.a>
          </Themed.h4>
        ))}
      </div>
    </React.Fragment>
  )
}

function Desktop() {
  return (
    <React.Fragment>
      {menuItems.map(({ name, to }, idx) => (
        <Themed.h4
          key={idx}
          sx={{
            userSelect: "none",
            my: 0,
            display: ["none", "initial"],
            ml: idx > 0 ? 3 : 0,
          }}
        >
          <Themed.a as={Link} to={to}>
            {name}
          </Themed.a>
        </Themed.h4>
      ))}
      <Themed.h4 sx={{ userSelect: "none", my: 0, ml: ["auto", 3] }}>
        <Themed.a as={Link} to="/carrito">
          Carrito
        </Themed.a>
      </Themed.h4>
    </React.Fragment>
  )
}

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
        <Container sx={{ variant: "layout.container" }}>
          <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Logo title={site.siteMetadata.title} />
            <Desktop />
            <Mobile />
          </Flex>
        </Container>
      </header>
    </Headroom>
  )
}

export default Header
