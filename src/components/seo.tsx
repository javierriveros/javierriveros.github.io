/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type Meta = {
  content: string;
  name?: string;
  property?: string;
};

type Props = {
  title: string;
  description?: string;
  meta?: Meta[];
  lang?: string;
  image?: string;
};

const SEO: FunctionComponent<Props> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
  image,
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultImage = image || `${site.siteMetadata.siteUrl}/logo.png`;
  const defaultTitle = `${title} | ${site.siteMetadata.title}`;

  const customMeta: Meta[] = [
    {
      name: "description",
      content: metaDescription,
    },
    {
      property: "og:title",
      content: defaultTitle,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: defaultImage,
    },
    {
      property: "og:url",
      content: site.siteMetadata.siteUrl,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: site.siteMetadata.author,
    },
    {
      name: "twitter:title",
      content: defaultTitle,
    },
    {
      name: "twitter:description",
      content: metaDescription,
    },
    {
      name: "twitter:image",
      content: defaultImage,
    },
    {
      name: "theme-color",
      content: "#0f172a",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={customMeta.concat(meta)}
    />
  );
};

export default SEO;
