import base from "@theme-ui/preset-base"
import { merge } from "theme-ui"

import "@fontsource/lato/700.css"
import "@fontsource/lato/400.css"

const theme = merge(base, {
  colors: {
    primary: "#000",
    secondary: "#ffae1e",
  },
  fontSizes: [12, 14, 16, 22, 24, 32, 48, 64, 96],
  fonts: {
    heading: `Lato`,
    body: `Lato`,
  },
  fontWeights: {
    heading: 700,
    body: 400,
  },
  sizes: {
    container: 1360,
    thin: 960,
    blog: 540,
  },
  layout: {
    root: { display: "flex", flexDirection: "column", minHeight: "100vh" },
    header: { width: "100%", bg: "background" },
    main: { width: "100%", flex: "1 1 auto", pb: 3 },
    footer: { width: "100%", textAlign: "center", py: 3 },
    container: { maxWidth: "container", mx: "auto", px: 3 },
  },
  grids: {
    primary: {
      gap: 5,
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    },
  },
  cards: {
    primary: {
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      "&:hover": {
        boxShadow: "0 0 16px rgba(0, 0, 0, 0.250)",
      },
    },
  },
  forms: {
    primary: {
      // bg: "red",
      // p: 3,
      // maxWidth: ["100%", 640],
      // mx: "auto",
    },
    label: {
      fontSize: 2,
      fontWeight: "bold",
    },
    input: {
      fontFamily: "monospace",
      borderColor: "gray",
      mb: 3,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      fontFamily: "monospace",
      borderColor: "gray",
      mb: 3,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
  text: {
    truncate: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      my: 0,
    },
  },
  buttons: {
    primary: {
      border: theme => `1px solid ${theme.colors.primary}`,
      borderRadius: 0,
      cursor: "pointer",
      bg: "primary",
      color: "background",
      "&:hover": {
        bg: "secondary",
        color: "primary",
      },
    },
  },
  styles: {
    a: {
      fontWeight: "bold",
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
