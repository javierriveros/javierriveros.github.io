/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent, ReactNode } from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components"

import Header from "./header"
import Footer from "./footer"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
    background-color: #333646;
    color: #fff;
  }

  main {
    margin: 0 auto;
  }
`

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type LayoutProps = {
  children: ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledThemeProvider theme={{ theme: "light" }}>
      <GlobalStyle />
      <main>
        <Header siteTitle={data.site.siteMetadata.title} />

        {children}

        <Footer />
      </main>
    </StyledThemeProvider>
  )
}

export default Layout
