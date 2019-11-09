import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { theme } from "../themes/theme"
import GlobalStyles from "../utils/global.styles"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

import { PageContainer } from "./layout.styles"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <PageContainer>
          <Header />
          <main>{children}</main>
          <Footer />
        </PageContainer>
      </>
    </ThemeProvider>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
