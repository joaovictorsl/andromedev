import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <header className="w-full">
    <div className="w-full flex justify-around px-64">
      <Link to="/">Home</Link>
      <Link to="/details">Detalhes</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/help">Ajuda</Link>
    </div>
  </header>
);

export default Header;
