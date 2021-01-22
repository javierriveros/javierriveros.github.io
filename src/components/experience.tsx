import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import ExperienceCard from "./experience-card";
import { Container, Section, SectionProps, Title } from "./styles";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ExperienceStyles = styled(Section)<SectionProps>`
  background-color: #262734;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export type Node = {
  node: {
    id: string;
    role: string;
    responsibilities: string;
    company: string;
    from: string;
    to: string;
  };
};

export default function Experience() {
  const data = useStaticQuery(graphql`
    {
      allExperienceJson {
        edges {
          node {
            id
            role
            responsibilities
            company
            from
            to
          }
        }
      }
    }
  `);
  return (
    <ExperienceStyles>
      <Container>
        <Title>Work experience</Title>
        {data.allExperienceJson.edges.map(({ node }: Node) => (
          <ExperienceCard node={node} key={node.id} />
        ))}
      </Container>
    </ExperienceStyles>
  );
}
