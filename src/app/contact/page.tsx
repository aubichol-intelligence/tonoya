"use client";
import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
import Form from "../form1/page";

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
        <Form/>
        
      )}
    </div>
  );
}
