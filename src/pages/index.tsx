import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Education from "../components/education"

const IndexPage: React.FunctionComponent<PageProps> = (props: PageProps) => (
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
    <Hero />
    <Experience />
    <Projects />
    <Education />
  </Layout>
)

export default IndexPage
