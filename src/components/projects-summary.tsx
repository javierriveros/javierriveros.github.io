import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import ProjectCard from "./project-card";
import {
  Button,
  Centered,
  Container,
  Section,
  SectionProps,
  Title,
} from "./styles";

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
  };
}

export default function ProjectsSummary() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson(sort: { fields: date, order: DESC }, limit: 2) {
        edges {
          node {
            id
            name
            description
            stack
            client
            goals
            date
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

        <Centered>
          <Button to="/projects">View more</Button>
        </Centered>
      </Container>
    </ProjectsStyles>
  );
}
