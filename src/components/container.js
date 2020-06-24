import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Container({ children }) {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
