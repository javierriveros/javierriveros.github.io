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
  font-size: 2.25rem;
  margin: 0.5rem 0 1.5rem 0;
  font-weight: 700;
  color: ${props => props.theme.text};
  position: relative;
  display: inline-block;
  
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    height: 3px;
    width: 40px;
    background-color: ${props => props.theme.accent};
    border-radius: 3px;
  }
`;

export const Section = styled.section<SectionProps>`
  background-color: ${props => (props.second ? props.theme.neutral : props.theme.body)};
  padding: 3.5rem 0;
`;

export const Button = styled(Link)`
  text-decoration: none;
  margin: 1rem 0;
  color: ${props => props.theme.accent};
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
