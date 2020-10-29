import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";

import { Container } from "./styles";

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background-color: #333646;

  h1 {
    margin: 0;

    a {
      color: #ffaf28;
      text-decoration: none;
    }
  }

  nav > a {
    text-decoration: none;
    position: relative;
    color: #666874;
    font-weight: 600;
    margin-right: 0.5rem;
    transition: color 0.1s;

    &:active,
    &:focus,
    &:hover,
    &.active {
      color: #fff;
    }

    &.active {
      &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        display: block;
        border-radius: 50%;
        height: 5px;
        width: 5px;
        margin: 0 auto;
        bottom: -10px;

        background-color: #ffaf28;
      }
    }
  }
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type HeaderProps = {
  siteTitle: string;
};

const Header: React.FunctionComponent<HeaderProps> = ({
  siteTitle,
}: HeaderProps) => (
  <Container>
    <HeaderStyles>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <nav>
        {/*{<Link to="/" activeClassName="active">
          Blog
        </Link>
        <a href="#">Blog</a>
          */}
      </nav>
    </HeaderStyles>
  </Container>
);

export default Header;
