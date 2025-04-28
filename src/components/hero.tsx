import * as React from "react";
import styled from "styled-components";

import ProfileImage from "./profile-image";
import { Container } from "./styles";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const HeroStyles = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0;

  @media screen and (min-width: 62em) {
    flex-direction: row;
    padding: 0;
  }
`;

const LeftContent = styled.article`
  padding-right: 1rem;
  padding-bottom: 1rem;
  width: 100%;

  @media screen and (min-width: 62em) {
    width: 65%;
  }
`;

const RightContent = styled.aside`
  padding: 0;
  width: 35%;

  @media screen and (max-width: 62em) {
    display: none;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.text};
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(
    to right,
    ${props => props.theme.text},
    ${props => props.theme.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media screen and (min-width: 62em) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  margin: 1rem 0;

  @media screen and (min-width: 62em) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: ${props => props.theme.neutralDark};
  line-height: 1.8;
  font-size: 1rem;

  @media screen and (min-width: 62em) {
    font-size: 1.1rem;
  }
`;

export default function Hero() {
  return (
    <Container>
      <HeroStyles>
        <LeftContent>
          <Title>Hi! I{"'"}m Javier Riveros.</Title>
          <Subtitle>Software Engineer from Colombia 🇨🇴</Subtitle>
          <Description>
            I solve complex problems through technology. With 4+ years of
            experience, I{"'"}ve built systems that scale, led technical
            initiatives, and helped teams grow through mentorship.
            <br />
            <br />
            Always curious about new technologies and passionate about creating
            solutions that make a difference in people{"'"}s lives.
          </Description>
        </LeftContent>
        <RightContent>
          <ProfileImage />
        </RightContent>
      </HeroStyles>
    </Container>
  );
}
