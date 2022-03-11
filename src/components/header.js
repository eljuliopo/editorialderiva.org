/** @jsx jsx */
import { jsx, Container, Themed, Flex, useThemeUI } from "theme-ui"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import React from "react"

import { useCart, useMenu } from "../store"
import Logo from "./logo"

export const menuItems = [
  {
    name: "Nosotros",
    to: "/nosotros",
  },
  {
    name: "Catálogo",
    to: "/catalogo",
  },
  {
    name: "Notas",
    to: "/blog",
  },
]

function CartIcon() {
  const { cart } = useCart()
  if (cart.length) {
    return (
      <Themed.h4 sx={{ userSelect: "none", my: 0, ml: ["auto", 3] }}>
        <Themed.a as={Link} to="/carrito">
          Carrito
        </Themed.a>
      </Themed.h4>
    )
  }
  return null
}

function Mobile() {
  const { isMenuOpen, toggleMenu } = useMenu()
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
    <Flex>
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
      <CartIcon />
    </Flex>
  )
}

const Header = () => {
  const { theme } = useThemeUI()
  const [bg, setBg] = React.useState("none")
  const onPin = a => setBg(theme.colors.background)
  const onUnpin = a => setBg("none")
  const onUnfix = a => setBg("none")
  return (
    <Headroom onPin={onPin} onUnpin={onUnpin} onUnfix={onUnfix}>
      <header sx={{ variant: "layout.header", transition: "all, .8s", bg }}>
        <Container sx={{ variant: "layout.container" }}>
          <Flex sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Themed.a as={Link} to="/">
              <Logo sx={{ width: 150, my: 3 }} color="black" />
            </Themed.a>
            <Desktop />
            <Mobile />
          </Flex>
        </Container>
      </header>
    </Headroom>
  )
}

export default Header
