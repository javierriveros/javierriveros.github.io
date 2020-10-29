import * as React from "react";
import { PageProps } from "gatsby";

import SEO from "../components/seo";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Projects from "../components/projects";
import Education from "../components/education";
import Experience from "../components/experience";

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
);

export default IndexPage;
