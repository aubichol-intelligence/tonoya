import React from 'react';
import styles from './page.module.css';

const HoverEffect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h2 className={styles.text}>Hover over me!</h2>
      </div>
    </div>
  );
};

export default HoverEffect;
