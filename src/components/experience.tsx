import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import ExperienceCard from "./experience-card";
import { Container, Section, SectionProps, Title } from "./styles";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ExperienceStyles = styled(Section)<SectionProps>`
  background-color: ${props => props.theme.neutral};
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export type Node = {
  node: {
    uid: string;
    role: string;
    responsibilities: string[];
    company: string;
    from: string;
    to: string;
    url: string;
    technologies?: string;
  };
};

export default function Experience() {
  const data = useStaticQuery(graphql`
    {
      allExperienceJson(sort: { fields: [uid], order: ASC }) {
        edges {
          node {
            uid
            role
            responsibilities
            company
            from
            to
            url
            technologies
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
          <ExperienceCard node={node} key={node.uid} />
        ))}
      </Container>
    </ExperienceStyles>
  );
}
