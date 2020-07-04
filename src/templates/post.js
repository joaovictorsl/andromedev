import React from "react";

import Layout from "../components/layouts/layout";

const Post = ({ data }) => {
  const {
    markdownRemark: { html },
  } = data;

  return (
    <Layout>
      <section
        dangerouslySetInnerHTML={{ __html: html }}
        className="markdown"
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
