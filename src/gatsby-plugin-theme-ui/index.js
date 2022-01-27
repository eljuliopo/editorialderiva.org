import { base as preset } from "@theme-ui/presets"
import { merge } from "theme-ui"

import "@fontsource/lato/700.css"
import "@fontsource/lato/400.css"

const theme = merge(preset, {
  colors: {
    primary: "#111",
    secondary: "#999",
  },
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
    header: { width: "100%" },
    main: { width: "100%", flex: "1 1 auto", pb: 5 },
    footer: { width: "100%", py: 3, bg: "text", color: "background" },
    container: { maxWidth: "container", mx: "auto", px: 3 },
  },
  grids: {
    primary: {
      // gap: 5,
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
      fontSize: 1,
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
      resize: "none",
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
    inverted: {
      border: theme => `1px solid ${theme.colors.background}`,
      borderRadius: 0,
      cursor: "pointer",
      bg: "background",
      color: "primary",
      "&:hover": {
        bg: "primary",
        color: "background",
      },
    },
  },
  styles: {
    root: {
      ".headroom-wrapper": {
        zIndex: 1000,
      },
      ".react-share__ShareButton": {
        marginRight: 2,
      },
    },
    button: {
      fontFamily: "body",
    },
    a: {
      fontWeight: "bold",
      textDecoration: "none",
      ":hover": {
        color: "secondary",
      },
    },
    p: {
      fontSize: 3,
      // textAlign: "justify",
    },
    blockquote: {
      mx: 3,
      bg: "muted",
      fontStyle: "italic",
      px: 3,
      py: 1,
    },
  },
})

export default theme
