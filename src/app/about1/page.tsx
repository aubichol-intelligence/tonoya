// components/AboutSection.js
import React from 'react';
import styles from './page.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>A Story of Complementarity</h2>
        <p className={styles.description}>
          Our philosophy is built on complementarity: pairing creative excellence with strategic vision, forming a harmonious balance that shapes successful brands.
        </p>
        <p className={styles.description}>
          We believe that collaboration and unity are key to success in both design and business. Our approach blends aesthetics with functionality, offering an experience that elevates every brand we touch.
        </p>
      </div>
      <div className={styles.imageContent}>
        <div className={styles.image} />
      </div>
    </section>
  );
};

export default AboutSection;
