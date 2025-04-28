import React from "react";
import styled from "styled-components";

import { Node } from "./experience";
import { Check } from "./education-card";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const CardStyles = styled.article`
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1rem;
`;

const Date = styled.div`
  color: ${props => props.theme.neutralDark};
  font-size: 0.85rem;
  font-weight: 500;
`;

const Content = styled.div`
  padding: 0.75rem 0;
`;

const Role = styled.h4`
  margin: 0;
  font-size: 1.35rem;
  font-weight: 600;
`;

const Responsibilities = styled.ul`
  padding: 0;
  margin: 1.25rem 0 0 0;
`;

const Responsibility = styled.li`
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0;
  display: flex;
  align-items: start;
`;

const Company = styled.a`
  color: ${props => props.theme.accent};
  display: inline-block;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Technologies = styled.div`
  margin-top: 1.25rem;
`;

const TechStack = styled.span`
  color: ${props => props.theme.accentLight};
  font-size: 0.85rem;
`;

const Dot = styled.span`
  color: ${props => props.theme.neutralDark};
  margin: 0 0.5rem;
`;

const ExperienceCard = ({ node }: Node) => {
  return (
    <CardStyles>
      <Date>
        {node.from} • {node.to}
      </Date>
      <Content>
        <Role>{node.role}</Role>
        <Responsibilities>
          {node.responsibilities?.map((responsibility: string) => (
            <Responsibility key={responsibility}>
              <Check>
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Check>
              {responsibility}
            </Responsibility>
          ))}
        </Responsibilities>
        <Technologies>
          <Company href={node.url}>{node.company}</Company>
          {node.technologies && (
            <>
              <Dot>•</Dot>
              <TechStack>{node.technologies}</TechStack>
            </>
          )}
        </Technologies>
      </Content>
    </CardStyles>
  );
};

export default ExperienceCard;
