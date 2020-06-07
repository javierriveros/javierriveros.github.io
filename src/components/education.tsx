import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import EducationCard from "./education-card"
import { Item, Node, Edge } from "../types"

interface EducationProps {
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
    <div>
      <h2>Know about my education</h2>
      <nav>
        {data.allEducationJson.edges.map(({ node }: { node: Node }) => (
          <article key={node.slug}>
            <header>
              <p>{node.title}</p>
              <div>
                <p>{node.description}</p>
                {node.items.map((item: Item) => {
                  return <EducationCard item={item} key={item.id} />
                })}
              </div>
            </header>
          </article>
        ))}
      </nav>
    </div>
  )
}
