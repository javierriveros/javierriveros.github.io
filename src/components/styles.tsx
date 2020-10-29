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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export type SectionProps = {
  children: React.ReactNode;
  readonly second?: boolean;
};
