import base from "@theme-ui/preset-base"
import { merge } from "theme-ui"

import "@fontsource/saira/700.css"
import "@fontsource/saira/400.css"

const theme = merge(base, {
  colors: {
    primary: "#6d2f9c",
    secondary: "#ffae1e",
  },
  fontSizes: [12, 14, 16, 22, 24, 32, 48, 64, 96],
  fonts: {
    heading: `'Saira', sans-serif`,
    body: `'Saira', sans-serif`,
  },
  fontWeights: {
    heading: 700,
    body: 400,
  },
  sizes: {
    container: 1280,
  },
  layout: {
    root: { display: "flex", flexDirection: "column", minHeight: "100vh" },
    header: { width: "100%" },
    main: { width: "100%", flex: "1 1 auto", pb: 3 },
    footer: { width: "100%", textAlign: "center", py: 3 },
    container: { maxWidth: "container", mx: "auto", px: 3 },
  },
  styles: {
    a: {
      textDecoration: "none",
      ":hover": {
        color: "secondary",
      },
    },
    p: {
      fontSize: 3,
    },
  },
})

export default theme
