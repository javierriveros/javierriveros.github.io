import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

import { Container } from "./styles";
import ThemeToggle from "./theme-toggle";
import { ThemeContext } from "./layout";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  background-color: ${props =>
    `${props.theme.body}99`}; /* Semi-transparent background */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); /* For Safari support */
  border-bottom: 1px solid ${props => props.theme.neutral};
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color 0.3s ease;

  h1 {
    margin: 0;

    a {
      color: ${props => props.theme.accent};
      text-decoration: none;
      font-weight: 700;
      font-size: 1.5rem;
      transition: color 0.2s ease;

      &:hover {
        color: ${props => props.theme.accentLight};
      }
    }
  }

  nav {
    display: flex;
    align-items: center;
  }

  nav > a {
    text-decoration: none;
    position: relative;
    color: ${props => props.theme.neutralDark};
    font-weight: 600;
    margin-right: 1rem;
    transition: color 0.2s ease;

    &:active,
    &:focus,
    &:hover,
    &.active {
      color: ${props => props.theme.text};
    }

    &.active {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        display: block;
        height: 3px;
        width: 100%;
        margin: 0 auto;
        bottom: -8px;
        background-color: ${props => props.theme.accent};
        border-radius: 3px;
      }
    }
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type HeaderProps = {
  siteTitle: string;
};

const Header: React.FunctionComponent<HeaderProps> = ({
  siteTitle,
}: HeaderProps) => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <HeaderStyles>
      <HeaderContainer>
        <div>
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
        </div>
        <nav>
          {/*{<Link to="/blog" activeClassName="active">
            Blog
          </Link>*/}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>
      </HeaderContainer>
    </HeaderStyles>
  );
};

export default Header;
