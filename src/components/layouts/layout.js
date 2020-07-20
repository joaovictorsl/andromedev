import React from "react";
import PropTypes from "prop-types";

import Header from "../header.js";
import Footer from "../footer.js";
import SEO from "../seo";
import "./layout.css";

const Layout = ({ children, className, title }) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <SEO title={title} />
      <Header />
      <main className="pt-20 flex-1">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
