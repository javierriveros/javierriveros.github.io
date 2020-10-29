import React from "react";
import styled from "styled-components";

import { Node } from "./experience";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const CardStyles = styled.article`
  background-color: #262734;
  padding: 1rem 0;
  border-bottom: 1px solid #3b3d48;
`;

const Date = styled.div`
  color: #c8c8cc;
  font-size: 0.85rem;
`;

const Content = styled.div`
  padding: 0.5rem 0;
`;

const Role = styled.h4`
  margin: 0;
  /* font-family: "Gilroy"; */
  font-size: 1.25rem;
`;

const Responsabilities = styled.p``;

const Company = styled.span`
  color: #ffc25b;
`;

const ExperienceCard = ({ node }: Node) => {
  return (
    <CardStyles>
      <Date>
        {node.from} • {node.to}
      </Date>
      <Content>
        <Role>{node.role}</Role>
        <Responsabilities>{node.responsibilities}</Responsabilities>
        <Company>{node.company}</Company>
      </Content>
    </CardStyles>
  );
};

export default ExperienceCard;
