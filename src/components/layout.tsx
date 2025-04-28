/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent, ReactNode, useState, useEffect, createContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider
} from "styled-components";

import Header from "./header";
import Footer from "./footer";
import { darkTheme, lightTheme, ThemeType } from "./theme";

// Create theme context
export const ThemeContext = createContext<{
  theme: ThemeType;
  toggleTheme: () => void;
}>({
  theme: darkTheme,
  toggleTheme: () => {},
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
  // Initialize with dark theme, will be updated after component mounts
  const [theme, setTheme] = useState<ThemeType>(darkTheme);
  
  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(currentTheme => 
      currentTheme.body === darkTheme.body ? lightTheme : darkTheme
    );
    
    // Optionally, store user preference
    if (typeof window !== 'undefined') {
      const newTheme = theme.body === darkTheme.body ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
    }
  };
  
  useEffect(() => {
    // Check for stored theme preference
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    
    if (savedTheme) {
      // Use user's saved preference
      setTheme(savedTheme === 'dark' ? darkTheme : lightTheme);
    } else {
      // Check if user prefers light/dark mode
      const prefersDarkMode = window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Set theme based on user preference
      setTheme(prefersDarkMode ? darkTheme : lightTheme);
    }
    
    // Add event listener to change theme when system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only change if user hasn't set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? darkTheme : lightTheme);
      }
    };
    
    // Add event listener for theme changes
    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
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

  // Theme context value
  const themeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        <main style={{ position: 'relative' }}>
          <Header siteTitle={data.site.siteMetadata.title} />

          {children}

          <Footer />
        </main>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Layout;
