import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { EducationCard } from "./education-card";
import { Container, Section, Title } from "./styles";
import { Edge, Node } from "../types";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const EducationStyles = styled(Section)``;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  align-items: start;
`;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type EducationProps = {
  allEducationJson: {
    edges: Edge[];
  };
};

export default function Education() {
  const data = useStaticQuery<EducationProps>(graphql`
    {
      allEducationJson(sort: { fields: [slug], order: [ASC] }) {
        edges {
          node {
            slug
            title
            description
            items {
              id
              degree
              name
              url
              provider
              year
            }
          }
        }
      }
    }
  `);
  return (
    <EducationStyles second>
      <Container>
        <Title>About my education</Title>
        <EducationGrid>
          {data.allEducationJson.edges.map(({ node }: { node: Node }) => (
            <EducationCard node={node} key={node.slug} />
          ))}
        </EducationGrid>
      </Container>
    </EducationStyles>
  );
}
