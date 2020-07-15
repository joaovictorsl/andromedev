import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layouts/layout";
import SEO from "../components/seo";

const Post = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  } = data;

  return (
    <Layout>
      <SEO title={title} />
      <h1 className="text-center mb-8 font-bold">{title}</h1>
      <section
        dangerouslySetInnerHTML={{ __html: html }}
        className="markdown max-w-3xl mx-auto"
      />
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Post;
