import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { EducationCard } from "./education-card"
import { Section, Container, Title } from "./styles"
import { Node, Edge } from "../types"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const EducationStyles = styled(Section)``

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  align-items: start;
`

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type EducationProps = {
  allEducationJson: {
    edges: Edge[]
  }
}

export default function Education() {
  const data = useStaticQuery<EducationProps>(graphql`
    {
      allEducationJson {
        edges {
          node {
            slug
            title
            description
            items {
              id
              degree
              name
              score
              url
            }
          }
        }
      }
    }
  `)
  return (
    <EducationStyles second>
      <Container>
        <Title>Know about my education</Title>
        <EducationGrid>
          {data.allEducationJson.edges.map(({ node }: { node: Node }) => (
            <EducationCard node={node} key={node.slug} />
          ))}
        </EducationGrid>
      </Container>
    </EducationStyles>
  )
}
