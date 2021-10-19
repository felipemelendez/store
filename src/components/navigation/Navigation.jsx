import React from "react";
import styles from "./navigation.module.css";
import {AiOutlineSearch} from 'react-icons/ai';
import {RiShoppingBag2Line} from 'react-icons/ri';
import {BsApple} from 'react-icons/bs';

const Navigation = () => {
  return (
    <div className={styles.navigationContainer}>
      <nav>
        <BsApple style={{color: 'azure'}}/>
        <a href="#">Discover</a>
        <a href="#">Chontaduro</a>
        <a href="#">Borojo</a>
        <a href="#">Immunity Boost</a>
        <a href="#">Join</a>
        <RiShoppingBag2Line style={{color: 'azure'}}/>
        <AiOutlineSearch className={styles.AiOutlineSearch} style={{color: 'azure'}}/>
      </nav>

    </div>
  )
}

export default Navigation;