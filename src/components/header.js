import { Link } from "gatsby";
import React from "react";

const Header = () => (
  <header className="w-full bg-dark-gray pt-4 sticky top-0 z-30 mb-8 text-white">
    <nav className="flex justify-center space-x-16">
      <Link to="/" className="hover:text-golden">
        Início
      </Link>
      <Link to="/detalhes" className="hover:text-golden">
        Detalhes
      </Link>
      <Link to="/guia" className="hover:text-golden">
        Guia de Bordo
      </Link>
    </nav>
  </header>
);

export default Header;
