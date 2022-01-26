/** @jsx jsx */
import {
  jsx,
  Container,
  Themed,
  Grid,
  Box,
  useThemeUI,
  Divider,
} from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Form from "./form"
import SocialIcons from "./social-icons"
import Logo from "./logo"

import { menuItems } from "./header"

export default function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query FooterQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const { theme } = useThemeUI()
  return (
    <footer sx={{ variant: "layout.footer" }}>
      {/* <Container>
        <Grid columns={[1, 1, 3, 3]} sx={{ mb: 3 }}>
          <Box>
            <Logo sx={{ my: 3, width: 120 }} color={theme.colors.background} />
            {menuItems.map(({ name, to }, idx) => (
              <Themed.h4 key={idx}>
                <Themed.a as={Link} to={to} sx={{ color: "background" }}>
                  {name}
                </Themed.a>
              </Themed.h4>
            ))}
          </Box>
          <Box>
            <Themed.h4 sx={{ color: "background" }}>Distribución</Themed.h4>
            <Themed.p sx={{ color: "background", fontSize: 1 }}>
              En la Región Metropolitana puedes encontrar nuestros libros en:
            </Themed.p>
            <ul>
              <li>
                <Themed.p sx={{ color: "background", fontSize: 1, my: 0 }}>
                  Metales Pesados
                </Themed.p>
              </li>
              <li>
                <Themed.p sx={{ color: "background", fontSize: 1, my: 0 }}>
                  Librería Universitaria
                </Themed.p>
              </li>
              <li>
                <Themed.p sx={{ color: "background", fontSize: 1, my: 0 }}>
                  Los Perros Románticos
                </Themed.p>
              </li>
              <li>
                <Themed.p sx={{ color: "background", fontSize: 1, my: 0 }}>
                  Flor de Papel
                </Themed.p>
              </li>
            </ul>
            <Themed.h2 sx={{ color: "background", fontSize: 1 }}>
              Política de despacho
            </Themed.h2>
            <Themed.p sx={{ color: "background", fontSize: 1 }}>
              Despacho gratuito en la <strong>Región Metropolitana</strong> (
              <i>Santiago</i>, <i>Ñuñoa</i>, <i>Peñalolén</i>, <i>Macul</i>,{" "}
              <i>Providencia</i>, <i>Estación Central</i>) y en la{" "}
              <strong>Región del Maule</strong> (<i>Talca</i>, <i>Linares</i>,{" "}
              <i>San Javier</i>, <i>Villa Alegre</i>, <i>Maule</i>).
            </Themed.p>
            <Themed.p sx={{ color: "background", fontSize: 1 }}>
              Todas las demás regiones con despacho a convenir.
            </Themed.p>
          </Box>
          <Box>
            <Themed.h4 sx={{ color: "background" }}>Contáctanos</Themed.h4>
            <Themed.p sx={{ color: "background", fontSize: 1 }}>
              Puedes escribirnos directamente a{" "}
              <Themed.a
                sx={{ color: "background" }}
                href="mailto:contacto@editorialderiva.org"
              >
                contacto arroba editorialderiva.org
              </Themed.a>{" "}
              o a través del siguiente formulario.
            </Themed.p>

            <Form />
          </Box>
        </Grid>
        © Editorial Deriva {new Date().getFullYear()}
      </Container> */}
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        {/* <AnchorLink to="/#index" sx={{ textAlign: "center" }}> */}
        <StaticImage
          src="../images/deriva-icon.png"
          width={50}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          // alt={data.site.siteMetadata.title}
          sx={{ mx: "auto" }}
        />
        {/* </AnchorLink> */}
        <Themed.p
          sx={{ textAlign: "center", fontSize: 0, color: "background" }}
        >
          © {new Date().getFullYear()}{" "}
          <Themed.a as={Link} to="/" sx={{ color: "background" }}>
            Editorial Deriva
          </Themed.a>
          <br />
          Calle Los Artesanos Nro. 199
          <br />
          Villa Alegre, Región del Maule
          <br />
          contacto@editorialderiva.org | +56 9 353 666 87
        </Themed.p>
        <SocialIcons />
      </Container>
    </footer>
  )
}
