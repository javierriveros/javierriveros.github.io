/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {
  FunctionComponent,
  ReactNode,
  useState,
  useEffect,
  createContext,
} from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";

import Header from "./header";
import Footer from "./footer";
import { darkTheme, lightTheme, ThemeType } from "./theme";

export const ThemeContext = createContext<{
  theme: ThemeType;
  toggleTheme: () => void;
}>({
  theme: darkTheme,
  toggleTheme: () => {
    // Default implementation that does nothing
    // This will be overridden by the actual implementation in the provider
  },
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: "National Park", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
  }

  main {
    margin: 0 auto;
  }
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type LayoutProps = {
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<ThemeType>(darkTheme);

  const toggleTheme = () => {
    setTheme(currentTheme =>
      currentTheme.body === darkTheme.body ? lightTheme : darkTheme
    );

    if (typeof window !== "undefined") {
      const newTheme = theme.body === darkTheme.body ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
    }
  };

  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;

    if (savedTheme) {
      setTheme(savedTheme === "dark" ? darkTheme : lightTheme);
    } else {
      const prefersDarkMode =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      setTheme(prefersDarkMode ? darkTheme : lightTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? darkTheme : lightTheme);
      }
    };

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const themeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <main style={{ position: "relative" }}>
          <Header siteTitle={data.site.siteMetadata.title} />

          {children}

          <Footer />
        </main>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Layout;
