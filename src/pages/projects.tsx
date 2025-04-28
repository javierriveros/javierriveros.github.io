import * as React from "react";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Projects from "../components/projects";

export default function ProjectsPage() {
  return (
    <Layout>
      <SEO
        title="Projects | Javier Riveros"
        description="Explore my technical projects showcasing expertise in full-stack development, AI integration, and system architecture. From SaaS platforms to AI-powered solutions, see how I solve complex problems through technology."
        meta={[
          {
            name: "keywords",
            content:
              "software projects, web applications, saas, full stack development, scala, python, vue.js, react, typescript, javascript, django, ruby on rails, play framework, aws, mysql, postgresql, redis, rabbitmq, llm, langchain, ai, machine learning, nlp, web scraping, data analysis, metabase, system architecture, performance optimization, test driven development, continuous integration, devops, cloud computing, distributed systems, microservices, api development, database design, frontend development, backend development, mobile development",
          },
        ]}
      />
      <Projects />
    </Layout>
  );
}
