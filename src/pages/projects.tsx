import * as React from "react";
import { PageProps } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Projects from "../components/projects";

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
);

export default ProjectsPage;
