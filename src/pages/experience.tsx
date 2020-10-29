import * as React from "react";
import { PageProps } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Experience from "../components/experience";

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
);

export default ExperiencePage;
