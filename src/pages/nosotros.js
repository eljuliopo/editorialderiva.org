/** @jsx jsx */
import { jsx, Themed, Box, Divider } from "theme-ui"

import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Nosotros() {
  return (
    <Layout>
      <Seo title="Nosotros" />
      <Box sx={{ maxWidth: "blog", mx: "auto" }}>
        <Themed.h1>Nosotros</Themed.h1>
        <Themed.p>
          <span role="img" aria-label="mano">
            Somos buena onda 👍
          </span>
        </Themed.p>
        <Themed.p>
          Editorial Deriva es un proyecto colectivo que se materializa el año 2019 en la comuna de <strong>Villa Alegre</strong>, región del Maule.
        </Themed.p>
        <Themed.p>
          La iniciativa ha tenido un largo período de incubación y hoy trabajan formalmente en el proyecto <strong>Julio Díaz</strong> y <strong>Alfonso Medrano</strong>, entre
          otrxs colaboradorxs, compañerxs y amigxs.
        </Themed.p>
        <Divider />
        <Themed.h1>Distribución</Themed.h1>
        <Themed.p>En la Región Metropolitana puedes encontrar nuestros libros en:</Themed.p>
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
          <li>
            <Themed.p sx={{ my: 0 }}>Altamira</Themed.p>
          </li>
          <li>
            <Themed.p sx={{ my: 0 }}>Comuna Literaria</Themed.p>
          </li>
          <li>
            <Themed.p sx={{ my: 0 }}>Librería Proyección</Themed.p>
          </li>
          <li>
            <Themed.p sx={{ my: 0 }}>Cafebrería</Themed.p>
          </li>
        </ul>
        <Themed.p>En la Región del Maule puedes encontrar nuestros libros en:</Themed.p>
        <ul>
        <li>
            <Themed.p sx={{ my: 0 }}>Ático Libros (Curicó & Talca)</Themed.p>
          </li>
          <li>
            <Themed.p sx={{ my: 0 }}>Palabra Fuego (Talca)</Themed.p>
          </li>
        </ul>
      </Box>
    </Layout>
  )
}
