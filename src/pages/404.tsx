import * as React from "react";
import { PageProps } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";

const NotFoundPage: React.FunctionComponent<PageProps> = (props: PageProps) => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
