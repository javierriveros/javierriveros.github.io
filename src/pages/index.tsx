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
        title="Javier Riveros | Software Engineer"
        description="Software Engineer with 4+ years of experience building scalable systems and leading technical initiatives. Specialized in full-stack development, AI integration, and system optimization."
        meta={[
          {
            name: "keywords",
            content:
              "software engineer, full stack developer, scala, python, vue.js, react, typescript, javascript, django, ruby on rails, play framework, aws, mysql, postgresql, redis, rabbitmq, llm, langchain, ai, machine learning, nlp, web development, backend development, frontend development, colombia, product engineer, technical lead, mentor, software architecture, system design, performance optimization, test driven development, continuous integration, devops",
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
