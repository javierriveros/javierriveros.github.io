import React from "react"
import styled from "styled-components"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const FooterStyles = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
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
  }

  @media screen and (min-width: 62em) {
    flex-direction: row;
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
`
const SocialLink = styled.a`
  text-decoration: none;
  margin: 0 1rem;
  color: #ffc25b;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    border-bottom: 1px;
    height: 1px;
    width: 100%;
    background-color: currentColor;
    transition: bottom 0.3s;
  }

  &:hover::after {
    bottom: 0;
  }
`

const Footer: React.FunctionComponent<{}> = () => {
  return (
    <FooterStyles>
      <div>
        <SocialLink
          href="https://twitter.com/JavierRiiveros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </SocialLink>
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
          href="https://bio.torre.co/en/javierriveros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Torre.co
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
  )
}

export default Footer
