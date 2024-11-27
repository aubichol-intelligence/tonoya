"use client";
import React from "react";
import styles from './page.module.css';

export default function ProductPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src="/product1.png" alt="Product 1" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Product 1</h2>
          <p className={styles.cardDescription}>Amazing features for your needs.</p>
          <button className={styles.button}>Learn More</button>
        </div>
        <div className={styles.card}>
          <img src="/product2.png" alt="Product 2" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Product 2</h2>
          <p className={styles.cardDescription}>Innovative solutions at your fingertips.</p>
          <button className={styles.button}>Learn More</button>
        </div>
        <div className={styles.card}>
          <img src="/product3.png" alt="Product 3" className={styles.cardImage} />
          <h2 className={styles.cardTitle}>Product 3</h2>
          <p className={styles.cardDescription}>Designed to make your life easier.</p>
          <button className={styles.button}>Learn More</button>
        </div>
      </div>
    </div>
  );
}
