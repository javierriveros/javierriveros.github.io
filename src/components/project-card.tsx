import React from "react";
import styled from "styled-components";

import { Node } from "./projects";
import { Check } from "./education-card";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ProjectStyles = styled.article`
  background-color: #424657;
  padding: 1.5rem;
  border-radius: 0.25em;
  margin-top: 1rem;
`;

const ProjectTitle = styled.h4`
  font-size: 1.25rem;
  margin: 0;
`;

const ProjectDate = styled.span`
  color: #c8c8cc;
  font-size: 0.85rem;
`;

const ProjectDescription = styled.p`
  color: #ddddde;
`;

const ProjectClient = styled.span`
  color: #ffc25b;
  font-size: 0.85rem;
`;

const ProjectStack = styled.span`
  color: #c8c8cc;
  font-size: 0.85rem;
`;

const ProjectGoals = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0 0;
  li {
    display: flex;
    align-items: start;
    margin: 0.25rem 0 0 0;
  }
`;

const Dot = styled.span`
  color: #c8c8cc;
  margin: 0 0.5rem;
`;

const ProjectCard = ({ node }: Node) => {
  return (
    <ProjectStyles>
      <ProjectTitle>{node.name}</ProjectTitle>
      <ProjectDate>{node.date}</ProjectDate>
      <ProjectDescription>{node.description}</ProjectDescription>
      <ProjectClient>{node.client}</ProjectClient>
      <Dot>•</Dot>
      <ProjectStack>{node.stack}</ProjectStack>
      <ProjectGoals>
        {node.goals.map((goal: string, index: number) => (
          <li key={index}>
            <Check>
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </Check>
            {goal}
          </li>
        ))}
      </ProjectGoals>
    </ProjectStyles>
  );
};

export default ProjectCard;
