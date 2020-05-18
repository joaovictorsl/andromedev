import React from "react"
import Header from './header';
import Footer from './footer';

import styles from '../styles/container.module.css';

export default function Container({ children }) {
  return <div className={styles.container}>
            <Header />
            {children}
            <Footer className={ styles.footer } />
        </div>
}