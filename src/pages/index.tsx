import * as React from "react";

import SEO from "../components/seo";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Education from "../components/education";
import Experience from "../components/experience";
import ProjectsSummary from "../components/projects-summary";

export default function IndexPage() {
  return (
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
      <ProjectsSummary />
      <Education />
    </Layout>
  );
}
