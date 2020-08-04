import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLessThan,
  faGreaterThan,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

const Item = ({ children, slug, className, active }) => (
  <Link
    className={`my-1 p-4 hover:bg-purple-600 hover:text-white ${
      active ? "bg-purple-600 font-bold text-white" : "text-dark-gray"
      } ${className}`}
    to={slug}
  >
    {children}
  </Link>
);

const items = [
  {
    slug: "/guia/",
    text: "Introdução",
  },
  {
    slug: "/guia/organizacao/",
    text: "Guia da Organização",
  },
  {
    slug: "/guia/organizacao/projeto/",
    text: "Criação de Projeto",
    className: "ml-4",
  },
  {
    slug: "/guia/organizacao/projeto/repositorio/",
    text: "Requisitos do Repositório",
    className: "ml-8",
  },
  {
    slug: "/guia/mentor/",
    text: "Guia do Mentor",
  },
  {
    slug: "/guia/aprendiz/",
    text: "Guia do Aprendiz",
  },
];

const Navbar = ({ currentPage, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`bg-purple-800 w-16 h-16 text-white flex items-center justify-center rounded-full fixed bottom-0 right-0 mr-1 mb-4 xl:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <>
            <FontAwesomeIcon icon={faLessThan} />{" "}
            <FontAwesomeIcon icon={faGreaterThan} />
          </>
        ) : (
            <FontAwesomeIcon icon={faTimes} size="lg" />
          )}
      </button>
      <aside
        className={classNames(
          "z-20 fixed border-gray-300 border-r-2 overflow-hidden duration-500 bg-white h-full",
          {
            "w-0": !isOpen,
            "w-4/5 border-solid border-r-2": isOpen,
          },
          "xl:w-64 xl:border-solid xl:border-r-2",
          className
        )}
      >
        <nav className="flex flex-col">
          {items.map((item, index) => (
            <Item
              key={index}
              slug={item.slug}
              className={item.className}
              active={item.slug === currentPage}
            >
              {item.text}
            </Item>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
