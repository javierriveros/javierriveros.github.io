import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"
import { PageProps } from "gatsby"

const ProjectsPage: React.FunctionComponent<PageProps> = (props: PageProps) => (
  <Layout>
    <SEO
      title="Home"
      meta={[
        {
          name: "keywords",
          content: "portfolio, gatsby, react, javascript",
        },
      ]}
    />
    <Projects />
  </Layout>
)

export default ProjectsPage
