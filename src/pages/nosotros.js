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

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Nosotros() {
  return (
    <Layout>
      <Seo title="Nosotros" />
      <Box sx={{ maxWidth: "blog", mx: "auto" }}>
        <Themed.h1>Nosotros</Themed.h1>
        <Themed.p>
          Editorial Deriva surge como un colectivo que se formaliza el año 2019
          en la comuna de <strong>Villa Alegre</strong>, región del Maule.
        </Themed.p>
        <Themed.p>
          Su iniciativa ha tenido un largo período de incubación y hoy trabajan
          formalmente en el proyecto <strong>Julio Díaz</strong> y{" "}
          <strong>Alfonso Medrano</strong>, entre otrxs colaboradorxs,
          compañerxs y amigxs.
        </Themed.p>
        <Themed.h1>Distribución</Themed.h1>
        <Themed.p>
          En la Región Metropolitana puedes encontrar nuestros libros en:
        </Themed.p>
        <ul>
          <li>
            <Themed.p sx={{ my: 0 }}>Metales Pesados</Themed.p>
          </li>
          <li>
            <Themed.p sx={{ my: 0 }}>Librería Universitaria</Themed.p>
          </li>
          <li>
            <Themed.p sx={{ my: 0 }}>Los Perros Románticos</Themed.p>
          </li>
          <li>
            <Themed.p sx={{ my: 0 }}>Flor de Papel</Themed.p>
          </li>
        </ul>
        <Themed.h1>Política de despacho</Themed.h1>
        <Themed.p>
          Despacho gratuito en la <strong>Región Metropolitana</strong> (
          <i>Santiago</i>, <i>Ñuñoa</i>, <i>Peñalolén</i>, <i>Macul</i>,{" "}
          <i>Providencia</i>, <i>Estación Central</i>) y en la{" "}
          <strong>Región del Maule</strong> (<i>Talca</i>, <i>Linares</i>,{" "}
          <i>San Javier</i>, <i>Villa Alegre</i>, <i>Maule</i>).
        </Themed.p>
        <Themed.p>Todas las demás regiones con despacho a convenir.</Themed.p>
      </Box>
    </Layout>
  )
}
