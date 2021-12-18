/** @jsx jsx */
import { jsx, Container, Themed, Flex } from "theme-ui"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    sx={{
      variant: "layout.header",
    }}
  >
    <Container>
      <Themed.h1 sx={{ mb: 0 }}>
        <Themed.a as={Link} to="/">
          {siteTitle}
        </Themed.a>
      </Themed.h1>
      <Flex>
        <Themed.h4>
          <Themed.a as={Link} to="/nosotros">
            nosotros
          </Themed.a>
        </Themed.h4>
        <Themed.h4 sx={{ ml: 3 }}>
          <Themed.a as={Link} to="/catalogo">
            catalogo
          </Themed.a>
        </Themed.h4>
        <Themed.h4 sx={{ ml: 3 }}>
          <Themed.a as={Link} to="/contacto">
            contacto
          </Themed.a>
        </Themed.h4>
        <Themed.h4 sx={{ ml: 3 }}>
          <Themed.a as={Link} to="/carrito">
            carrito
          </Themed.a>
        </Themed.h4>
      </Flex>
    </Container>
  </header>
)

export default Header
