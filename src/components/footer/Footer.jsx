import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo} />
      <nav className={styles.nav}>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">Reviews</a>
        <a href="#">Learn</a>
        <a href="#">Borojo</a>
        <a href="#">Chontaduro</a>
        <a href="#">Health</a>
      </nav>

    </div>
  )
}

export default Footer;