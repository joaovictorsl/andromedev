import React from "react";
import PropTypes from "prop-types";

import Header from "../header.js";
import Footer from "../footer.js";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />
      <main className="max-w-3xl mx-auto px-5 py-10" style={{ width: "48rem" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
