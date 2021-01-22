import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export const Container = styled.section`
  margin: 0 auto;
  max-width: 90%;

  @media screen and (min-width: 62em) {
    max-width: 60rem;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  /* font-family: "Gilroy"; */
  margin: 0.5rem 0;
`;

export const Section = styled.section<SectionProps>`
  background-color: ${props => (props.second ? "#262734" : "#333646")};
  padding: 2.5rem 0;
`;

export const Button = styled(Link)`
  text-decoration: none;
  margin: 1rem 0;
  color: #ffc25b;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    border-bottom: 1px;
    height: 1.5px;
    width: 100%;
    background-color: currentColor;
    transition: bottom 0.3s;
  }

  &:hover::after {
    bottom: -2px;
  }
`;

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export type SectionProps = {
  children: React.ReactNode;
  readonly second?: boolean;
};
