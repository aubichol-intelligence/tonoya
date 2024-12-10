// src/components/StartProject.jsx
"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';


const StartProject = () => {
  const router = useRouter();

  const handleContactClick = () => {
    // Redirect to a contact page or open a modal
    // window.location.href = "/carousal2";
    router.push('/contact');
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Planning to get one?</h2>
        <p className={styles.description}>
          Let us make it happen together.
        </p>
      </div>
      <button className={styles.contactButton} onClick={handleContactClick}>
        Contact us
      </button>
    </div>
  );
};

export default StartProject;
