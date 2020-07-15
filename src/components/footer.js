// import { Link } from "gatsby"
import React from "react";

const Footer = () => (
  <footer className="flex justify-center bg-dark-gray py-10 text-white">
    <ul className="flex space-x-4">
      <li className="hover:text-orange">
        <a href="https://chat.opendevufcg.org/" target="_blank" rel="noreferrer">Discord</a>
      </li>
      <li className="hover:text-orange">
        <a href="https://opendevufcg.org/" target="_blank" rel="noreferrer">Site</a>
      </li>
      <li className="hover:text-orange">
        <a href="https://github.com/openDevUFCG" target="_blank" rel="noreferrer">Github</a>
      </li>
      <li className="hover:text-orange">
        <a href="https://twitter.com/OpenDevUFCG" target="_blank" rel="noreferrer">Twitter</a>
      </li>
      <li className="hover:text-orange">
        <a href="https://www.instagram.com/opendevufcg/" target="_blank" rel="noreferrer">Instagram</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
