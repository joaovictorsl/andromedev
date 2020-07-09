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
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
