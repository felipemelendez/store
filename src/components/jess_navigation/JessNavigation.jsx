import React from 'react';
import styles from './jessNavigation.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import {BsApple} from 'react-icons/bs';

const JessNavigation = () => {
	return (
		<div className={styles.container}>
			<nav>
      	<BsApple style={{color: 'azure'}}/>
				<a href="#" >Store</a>
				<a href="#" >Mac</a>
				<a href="#" >iPad</a>
				<a href="#" >iPhone</a>
				<a href="#" >Watch</a>
				<a href="#" >TV</a>
				<a href="#" >Music</a>
				<a href="#" >Suport</a>
				<AiOutlineSearch style={{color: 'azure'}}/>
			</nav>
		</div>
	);
};

export default JessNavigation;
