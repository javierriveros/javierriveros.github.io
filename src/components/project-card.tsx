import React from "react";
import styled from "styled-components";

import { Node } from "./projects";
import { Check } from "./education-card";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ProjectStyles = styled.article`
  background-color: ${props => props.theme.neutral};
  padding: 1.75rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
  }
`;

const ProjectTitleBase = `
  font-size: 1.35rem;
  margin: 0;
  font-weight: 600;
`;

const ProjectTitleHeading = styled.h4`
  ${ProjectTitleBase}
`;

const ProjectTitleLink = styled.a`
  ${ProjectTitleBase}
  color: inherit;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    margin-left: 0.5rem;
    color: ${props => props.theme.accentLight};
  }
`;

const ProjectDate = styled.span`
  color: ${props => props.theme.neutralDark};
  font-size: 0.85rem;
  display: block;
  margin: 0.5rem 0 1rem;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.text};
`;

const ProjectClient = styled.span`
  color: ${props => props.theme.accent};
  font-size: 0.85rem;
`;

const ProjectStack = styled.span`
  color: ${props => props.theme.accentLight};
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
  color: ${props => props.theme.neutralDark};
  margin: 0 0.5rem;
`;

const ProjectCard = ({ node }: Node) => {
  return (
    <ProjectStyles>
      {node.url ? (
        <ProjectTitleLink href={node.url} target="_blank" rel="noopener noreferrer">
          {node.name}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </ProjectTitleLink>
      ) : (
        <ProjectTitleHeading>{node.name}</ProjectTitleHeading>
      )}
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
