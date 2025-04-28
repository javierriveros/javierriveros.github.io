import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import ProjectCard from "./project-card";
import { Container, Section, SectionProps, Title } from "./styles";

const ProjectsStyles = styled(Section)<SectionProps>`
  //background-color: wheat;
`;

export interface Node {
  node: {
    id: string;
    name: string;
    description: string;
    client: string;
    stack: string;
    date: string;
    goals: string[];
    url?: string;
  };
}

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson(sort: { fields: date_raw, order: DESC }) {
        edges {
          node {
            id
            name
            description
            stack
            client
            goals
            date
            url
          }
        }
      }
    }
  `);
  return (
    <ProjectsStyles>
      <Container>
        <Title>Some of the projects I&apos;ve worked on</Title>
        {data.allProjectsJson.edges.map(({ node }: Node) => (
          <ProjectCard node={node} key={node.id} />
        ))}
      </Container>
    </ProjectsStyles>
  );
}
