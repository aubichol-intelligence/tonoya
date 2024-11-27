"use client";

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Background with 3D animation */}
      <div className={styles.background}>
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.front}`}>
            <h3>tonoya</h3>
          </div>
          <div className={`${styles.face} ${styles.back}`}></div>
          <div className={`${styles.face} ${styles.right}`}></div>
          <div className={`${styles.face} ${styles.left}`}></div>
          <div className={`${styles.face} ${styles.top}`}></div>
          <div className={`${styles.face} ${styles.bottom}`}></div>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.image}>
          <img src="/product.png" alt="Product" />
        </div>
        <div className={styles.text}>
          <h1>Welcome to Our Product!</h1>
          <p>Discover the amazing features of our innovative solution.</p>
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
