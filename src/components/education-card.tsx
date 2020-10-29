import React from "react";
import styled from "styled-components";
import { Item, Node } from "../types";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const CardStyles = styled.article``;

const NodeTitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 0;
  font-weight: 600;
`;

const NodeDescription = styled.p``;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type EducationCardProps = {
  node: Node;
};

type EducationItemProps = {
  item: Item;
};

export const EducationCard: React.FunctionComponent<EducationCardProps> = ({
  node,
}: EducationCardProps) => {
  return (
    <CardStyles>
      <NodeTitle>{node.title}</NodeTitle>

      <NodeDescription>{node.description}</NodeDescription>

      <section>
        {node.items.map((item: Item) => (
          <EducationItem key={item.id} item={item} />
        ))}
      </section>
    </CardStyles>
  );
};

const EducationItemStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0;
`;

const ItemTitle = styled.h4`
  display: inline-block;
  margin: 0 0 0.5rem;
`;

export const Check = styled.div`
  display: flex;
  color: #17bdca;
  /* width: 20px; */
  padding-right: 0.5rem;
  height: 100%;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.a`
  color: #ffaf28;
  text-decoration: none;
`;

const EducationItem: React.FunctionComponent<EducationItemProps> = ({
  item,
}: EducationItemProps) => {
  return (
    <EducationItemStyles>
      <Check>
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </Check>
      <Content>
        <ItemTitle>{item.name}</ItemTitle>

        {item.degree && <span>{item.degree}</span>}
        {item.url && (
          <StyledLink
            href={item.url}
            target="_blank"
            rel="noreferrer nooopener"
          >
            View more
          </StyledLink>
        )}
      </Content>
    </EducationItemStyles>
  );
};
