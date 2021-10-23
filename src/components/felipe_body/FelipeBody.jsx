import React, { useState } from 'react';
import styles from './felipeBody.module.css';

export default function Playground() {

  const[count, setCount] = useState(0)

  return (
    <div className={styles.body}>
      <div className={styles.parallax}></div>
      <div className={styles.buttonsContainer}>
        <div className={styles.first}>Have a Kwiki {count}
          <button className={styles.button} onClick={event => {setCount(count + 1)}}>Increase</button>
          <button className={styles.button} onClick={event => {setCount(count - 1)}}>Decrease</button>
        </div>
      </div>
      <div className={styles.noodle}>
        <div className={styles.text}>Healthiest, most</div>
      </div>
      <div className={styles.noodle}>
        <div className={styles.text}>nutrient dense fruits of nature</div>
      </div>
      <div className={styles.parallax}></div>
    </div>
  )
}

/*
const FelipeBody = () => {
  return (
    <div className={styles.body}>
      <nav>
        <button>Increase</button>
      </nav>
    <div className = 'container'>
      <h3>Playground</h3>
    </div>
    </div>
  )
}

export default FelipeBody;

*/