import React, { Fragment } from "react";
import PropTypes from "prop-types";

import Header from "../header.js";
import Footer from "../footer.js";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="h-full">{children}</main>
      {/* <main className="max-w-3xl mx-auto px-5 py-10 body">{children}</main> */}
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
