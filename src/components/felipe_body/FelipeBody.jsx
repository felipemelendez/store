import React, { useState } from 'react';
import styles from './felipeBody.module.css';

export default function Playground() {

  const[count, setCount] = useState(0)

  return (
    <div className={styles.body}>
      <div className='noodle'>The count is {count}</div>
      <button onClick={event => {setCount(count + 1)}}>Increase</button>
      <button onClick={event => {setCount(count - 1)}}>Decrease</button>
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