import * as React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Projects from "../components/projects";

export default function ProjectsPage() {
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
      <Projects />
    </Layout>
  );
}
