import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import { Title, Container, Section, SectionProps } from "./styles"
import ExperienceCard from "./experience-card"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const ExperienceStyles = styled(Section)<SectionProps>`
  background-color: #262734;
`

const Button = styled(Link)`
  text-decoration: none;
  margin: 1rem 0;
  color: #ffc25b;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
    border-bottom: 1px;
    height: 1.5px;
    width: 100%;
    background-color: currentColor;
    transition: bottom 0.3s;
  }

  &:hover::after {
    bottom: -2px;
  }
`

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export type Node = {
  node: {
    id: string
    role: string
    responsibilities: string
    company: string
    from: string
    to: string
  }
}

export default function Experience() {
  const data = useStaticQuery(graphql`
    {
      allExperienceJson {
        edges {
          node {
            id
            role
            responsabilities
            company
            from
            to
          }
        }
      }
    }
  `)
  return (
    <ExperienceStyles>
      <Container>
        <Title>Work experience</Title>
        {data.allExperienceJson.edges.map(({ node }: Node) => (
          <ExperienceCard node={node} key={node.id} />
        ))}
        <Centered>
          <Button to="/experience">View more</Button>
        </Centered>
      </Container>
    </ExperienceStyles>
  )
}
