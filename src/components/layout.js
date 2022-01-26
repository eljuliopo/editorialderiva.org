/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { Toaster } from "react-hot-toast"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, ...props }) => {
  return (
    <div sx={{ variant: "layout.root" }}>
      <Toaster />
      <Header isHome={props.path === "/"} />
      <main sx={{ variant: "layout.main" }}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
