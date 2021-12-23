import React from "react";
import styles from "./footer.module.css";
import {GiFruiting} from 'react-icons/gi';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <GiFruiting style={{color: 'azure'}}/>
        <a href="#">Discover</a>
        <a href="#">Question</a>
        <a href="#">Share</a>
        <a href="#">Invite</a>
        <a href="#">Health</a>
        <a href="#">Store</a>
        <a href="#">About Us</a>
        <GiFruiting style={{color: 'azure'}}/>
      </nav>

    </div>
  )
}

export default Footer;