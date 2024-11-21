import React from "react";
import styles from "./page.module.css";
import '../globals.css';


export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1>Atelier Design</h1>
        <p>Your creative partner for design and development.</p>
      </header>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.service}>
          <div className={styles.imageWrapper}>
            <img src="https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg" alt="Service 1" />
          </div>
          <h2>Web Design</h2>
          <p>
            Crafting beautiful and functional designs that captivate your
            audience.
          </p>
        </div>
        <div className={styles.service}>
          <div className={styles.imageWrapper}>
            <img src="https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg" alt="Service 2" />
          </div>
          <h2>Brand Identity</h2>
          <p>
            Building a unique and memorable identity for your business.
          </p>
        </div>
        <div className={styles.service}>
          <div className={styles.imageWrapper}>
            <img src="https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg" alt="Service 3" />
          </div>
          <h2>Development</h2>
          <p>
            Providing robust and scalable development solutions tailored to
            your needs.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2024 Atelier Design. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
