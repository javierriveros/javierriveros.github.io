import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface Node {
  node: {
    id: string
    role: string
    responsabilities: string
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
    <section>
      <h3>Work experience</h3>
      {data.allExperienceJson.edges.map(({ node }: Node) => (
        <article key={node.id}>
          <h4>{node.role}</h4>
          <p>{node.responsabilities}</p>
          <span>{node.company}</span>
          <span>
            {node.from} - {node.to}
          </span>
        </article>
      ))}
    </section>
  )
}
