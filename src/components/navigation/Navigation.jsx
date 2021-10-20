import React from "react";
import styles from "./navigation.module.css";
import {AiOutlineSearch} from 'react-icons/ai';
import {RiShoppingBag2Line} from 'react-icons/ri';
import {BsApple} from 'react-icons/bs';

const Navigation = () => {
  return (
    <div className={styles.navigationContainer}>
      <nav className={styles.mynav}>
        <BsApple style={{color: 'azure'}}/>
        <a href="#">Discover</a>
        <a href="#">Chontaduro</a>
        <a href="#">Borojo</a>
        <a href="#">Immunity Boost</a>
        <a href="#">Join</a>
        <RiShoppingBag2Line className={styles.bag}/>
        <AiOutlineSearch style={{color: 'azure'}}/>
      </nav>

    </div>
  )
}

export default Navigation;