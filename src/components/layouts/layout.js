import React from "react";
import PropTypes from "prop-types";

import Header from "../header.js";
import Footer from "../footer.js";
import "./layout.css";

const Layout = ({ children, className }) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
