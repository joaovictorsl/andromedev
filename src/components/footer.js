// import { Link } from "gatsby"
import React from "react"

import styles from '../styles/footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerColumn}>
            <ul>
                <li className={styles.label}>REDES SOCIAIS</li>
                <li><a href="/">Discord</a></li>
                <li><a href="/">Site</a></li>
                <li><a href="/">Github</a></li>
                <li><a href="/">Twitter</a></li>
                <li><a href="/">Instagram</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer