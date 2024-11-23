"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.pageContainer}>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <div className={styles.mainContent}>
          <header>
            <h1>Welcome to the Project</h1>
          </header>
          <p>
            Here is your project content. It appears with a smooth animation after the loader completes.
          </p>
        </div>
      )}
    </div>
  );
}
