import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <header className="w-full pt-4">
    <nav className="flex justify-around">
      <Link to="/" className="hover:text-blue-800">
        Início
      </Link>
      <Link to="/detalhes" className="hover:text-blue-800">
        Detalhes
      </Link>
      <Link to="/codigo-de-conduta" className="hover:text-blue-800">
        Código de Conduta
      </Link>
    </nav>
  </header>
);

export default Header;
