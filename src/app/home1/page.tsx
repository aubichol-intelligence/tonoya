
"use client"
import React from "react";
import styles from "./page.module.css";
import '../globals.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src="https://i.ibb.co.com/60KQ3x3/Tonoya-Product.jpg" alt="Product" />
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
