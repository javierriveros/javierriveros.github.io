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
  color: #fff;
  margin: 0;
  font-size: 2.5rem;

  @media screen and (min-width: 62em) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;

  @media screen and (min-width: 62em) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  color: #fff;
  line-height: 1.5;
  font-size: 1rem;

  @media screen and (min-width: 62em) {
    font-size: 1.25rem;
  }
`;

export default function Hero() {
  return (
    <Container>
      <HeroStyles>
        <LeftContent>
          <Title>Hi! I{"'"}m Javier Riveros.</Title>
          <Subtitle>I{"'"}m a web developer from Colombia 🇨🇴</Subtitle>
          <Description>
            I{"'"}m currently working as a Software Developer at Torre Labs Inc, where our goal is to make work fulfilling for everyone on Earth.
            <br />
            <br />
            I{"'"}m a passionate about technology, especially in the field of web development. I{"'"}m always looking for new challenges to learn and grow.
          </Description>
        </LeftContent>
        <RightContent>
          <ProfileImage />
        </RightContent>
      </HeroStyles>
    </Container>
  );
}
