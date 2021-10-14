import React from "react";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigationContainer}>
      <div className={styles.logo} />
      <nav className={styles.nav}>
        <a href="#">Menu</a>
        <a href="#">About Us</a>
        <a href="#">Store</a>
        <a href="#">Blog</a>
        <a href="#">Reviews</a>
      </nav>

    </div>
  )
}

export default Navigation;