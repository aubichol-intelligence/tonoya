// src/components/StartProject.jsx
"use client";
import React from "react";
import styles from "./page.module.css";


const StartProject = () => {
  const handleContactClick = () => {
    // Redirect to a contact page or open a modal
    window.location.href = "/contact";
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Starting a New Project?</h2>
        <p className={styles.description}>
          We're here to help you bring your vision to life. Whether it's a new
          business idea, a branding revamp, or a design challenge, let's make it
          happen together.
        </p>
      </div>
      <button className={styles.contactButton} onClick={handleContactClick}>
      <span>Contact Us</span>
      </button>
    </div>
  );
};

export default StartProject;
