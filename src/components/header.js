import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <header className="w-full pt-4 sticky top-0 z-30">
    <nav className="flex justify-center space-x-16">
      <Link to="/" className="hover:text-golden">
        Início
      </Link>
      <Link to="/detalhes" className="hover:text-golden">
        Detalhes
      </Link>
      <Link to="/codigo-de-conduta" className="hover:text-golden">
        Código de Conduta
      </Link>
    </nav>
  </header>
);

export default Header;
