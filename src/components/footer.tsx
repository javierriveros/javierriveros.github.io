import React from "react";
import styled from "styled-components";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    a {
      margin: 1rem 0;
    }
  }

  p {
    text-align: center;
    color: ${props => props.theme.neutralDark};
    font-size: 0.9rem;
  }

  @media screen and (min-width: 62em) {
    flex-direction: row;
    padding: 3rem 1rem;
  }

  @media screen and (min-width: 32em) {
    p {
      text-align: left;
    }
    div {
      flex-direction: row;
      a {
        margin: 0 1rem;
      }
    }
  }
`;

const SocialLink = styled.a`
  text-decoration: none;
  margin: 0 1rem;
  color: ${props => props.theme.accent};
  position: relative;
  font-weight: 500;
  
  &:hover {
    color: ${props => props.theme.accentLight};
  }
`;

const Footer: React.FunctionComponent<{}> = () => {
  return (
    <FooterStyles>
      <div>
        <SocialLink
          href="https://github.com/javierriveros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </SocialLink>
        <SocialLink
          href="https://gitlab.com/javierriveros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gitlab
        </SocialLink>
        <SocialLink
          href="https://torre.ai/javierriveros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Torre.ai
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/javier-riveros/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </SocialLink>
      </div>

      <p>Built with Gatsby and ❤️. By Javier Riveros.</p>
    </FooterStyles>
  );
};

export default Footer;
