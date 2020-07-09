import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <header className="w-full pt-4">
    <nav className="flex justify-around">
      <Link to="/" className="hover:text-orange">
        Início
      </Link>
      <Link to="/detalhes" className="hover:text-orange">
        Detalhes
      </Link>
      <Link to="/codigo-de-conduta" className="hover:text-orange">
        Código de Conduta
      </Link>
    </nav>
  </header>
);

export default Header;
