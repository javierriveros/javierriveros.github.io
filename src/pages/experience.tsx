import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"
import { PageProps } from "gatsby"

const ExperiencePage: React.FunctionComponent<PageProps> = (
  props: PageProps
) => (
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
    <Experience />
  </Layout>
)

export default ExperiencePage
