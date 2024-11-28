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
    router.push('/carousal2');
  };

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Starting a New Project?</h2>
        <p className={styles.description}>
          We are here to help you bring your vision to life. Whether it iss a new
          business idea, a branding revamp, or a design challenge, let uss make it
          happen together.
        </p>
      </div>
      <button className={styles.contactButton} onClick={handleContactClick}>
        Start Project
      </button>
    </div>
  );
};

export default StartProject;
