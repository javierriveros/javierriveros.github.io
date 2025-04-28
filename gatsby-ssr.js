/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"

// Add a dark background color by default to prevent flash of white content
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style key="prevent-fouc">
      {`
        :root {
          background-color: #0f172a;
          color: #f8fafc;
        }
        body {
          background-color: #0f172a;
          color: #f8fafc;
        }
      `}
    </style>
  ])
}