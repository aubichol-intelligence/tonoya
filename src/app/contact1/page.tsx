"use client"
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Form from "../form1/page";
import Footer from "../footer1/page";

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
     <Form/>
    </div>
  );
}
