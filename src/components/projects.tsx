import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface Node {
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
            goals
            date
          }
        }
      }
    }
  `)
  return (
    <section>
      <h3>Some of the projects I&apos;ve worked on</h3>
      {data.allProjectsJson.edges.map(({ node }: Node) => (
        <article key={node.id}>
          <h4>{node.name}</h4>
          <span>{node.date}</span>
          <p>{node.description}</p>
          <span>{node.client}</span>
          <p>{node.stack}</p>
          <ul>
            {node.goals.map((goal: string, index: number) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
