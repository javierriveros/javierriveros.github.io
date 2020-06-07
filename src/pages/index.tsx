import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Education from "../components/education"

const IndexPage: React.FunctionComponent<{}> = () => (
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
    <Link to="/page-2">Contact me</Link>
  </Layout>
)

export default IndexPage
