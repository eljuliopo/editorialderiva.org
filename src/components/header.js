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
        <Link to="/carrito" sx={t => t.styles.a}>
          Carrito
        </Link>
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
          cursor: "pointer",
        }}
        onClick={toggleMenu}
      >
        Menu
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
            <Link to={to} onClick={toggleMenu} sx={t => t.styles.a}>
              {name}
            </Link>
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
          <Link to={to} sx={t => t.styles.a}>
            {name}
          </Link>
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
            <Link to="/" sx={t => ({ ...t.styles.a, mr: "auto" })}>
              <Logo sx={{ width: 150, my: 3 }} color="black" />
            </Link>
            <Desktop />
            <Mobile />
          </Flex>
        </Container>
      </header>
    </Headroom>
  )
}

export default Header
