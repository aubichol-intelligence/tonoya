import React from 'react';
import styles from "./page.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Atelier Design</h1>
        <p className={styles.subtitle}>
          We create unique, innovative designs for businesses to thrive.
        </p>
        <button className={styles.ctaButton}>Explore Our Work</button>
      </div>
      <div className={styles.background}></div>
    </section>
  );
};

export default HeroSection;
