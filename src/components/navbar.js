import React from "react";
import { Link } from "gatsby";

const Item = ({ children, slug, className, active }) => (
  <Link
    className={
      `block p-4 text-dark-gray hover:bg-purple-200 hover:bg-opacity-25 hover:text-purple-600 ${active ? 'bg-purple-200' : ''} ${className}`
    }
    to={slug}
  >
    {children}
  </Link>
);

const items = [
  {
    slug: '/guia/',
    text: 'Introdução',
  },
  {
    slug: '/guia/organizacao/',
    text: 'Guia da Organização',
  },
  {
    slug: '/guia/organizacao/projeto/',
    text: 'Criação de Projeto',
    className: 'ml-4'
  },
  {
    slug: '/guia/organizacao/projeto/repositorio/',
    text: 'Requisitos do Repositório',
    className: 'ml-8',
  },
  {
    slug: '/guia/mentor/',
    text: 'Guia do Mentor',
  },
  {
    slug: '/guia/aprendiz/',
    text: 'Guia do Aprendiz',
  },
]

const Navbar = ({ pageSlug }) => {
  console.log(pageSlug)
  return (
    <aside className="w-64 my-2 absolute hidden xl:block">
      <nav className="flex flex-col">
        {items.map((item, index) => {
          console.log(item.slug, pageSlug)
          return (
            <Item
              key={index}
              slug={item.slug}
              className={item.className}
              active={item.slug === pageSlug}>
              {item.text}
            </Item>
          )
        })}
      </nav>
    </aside>
  );
};

export default Navbar;
