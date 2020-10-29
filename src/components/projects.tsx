import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Container, Section, SectionProps, Title } from "./styles"
import ProjectCard from "./project-card"

const ProjectsStyles = styled(Section)<SectionProps>`
  //background-color: wheat;
`

export interface Node {
  node: {
    id: string
    name: string
    description: string
    client: string
    stack: string
    date: string
    goals: string[]
  }
}

export default function Projects() {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson(sort: { fields: date, order: DESC }) {
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
  `)
  return (
    <ProjectsStyles>
      <Container>
        <Title>Some of the projects I&apos;ve worked on</Title>
        {data.allProjectsJson.edges.map(({ node }: Node) => (
          <ProjectCard node={node} key={node.id} />
        ))}
      </Container>
    </ProjectsStyles>
  )
}
