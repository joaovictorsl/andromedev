import { Link } from "gatsby"
import React from "react"

import styles from '../styles/header.module.css';

const Header = () => (
  <header>
    <div className={styles.container}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/details">Detalhes</Link>
      <Link className={styles.link} to="/projects">Projetos</Link>
      <Link className={styles.link} to="/about">Sobre</Link>
      <Link className={styles.link} to="/help">Ajuda</Link>
    </div>
  </header>
)

export default Header
