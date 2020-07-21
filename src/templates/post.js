import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layouts/layout";
import Navbar from "../components/navbar";

const Post = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: { title },
      fields: { slug },
    },
  } = data;

  const showNavBar = /guia/.test(slug);

  return (
    <Layout title={title} className="bg-gray-100">
      {showNavBar && <Navbar pageSlug={slug} />}
      <h1 className="text-center mb-8 font-bold text-purple-800 sm:text-lg md:text-xl lg:text-5xl xl:text-5xl ">
        {title}
      </h1>
      <section
        dangerouslySetInnerHTML={{ __html: html }}
        className="markdown max-w-3xl mx-auto px-6 lg:px-0"
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
      fields {
        slug
      }
    }
  }
`;

export default Post;
