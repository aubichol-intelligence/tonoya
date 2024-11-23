"use client"
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Simulate the animation duration (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.pageContainer}>
      {isAnimating && <div className={styles.animationOverlay}></div>}
      <div
        className={`${styles.mainContent} ${
          isAnimating ? styles.hidden : styles.visible
        }`}
      >
        <header>
          <h1>Welcome to the Project</h1>
        </header>
        <p>
          This is the main content that appears after the animation completes.
        </p>
      </div>
    </div>
  );
}
