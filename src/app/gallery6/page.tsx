"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

const VideoHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`${styles.container} ${isHovered ? styles.hovered : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.text}>
        <h1>Hover to Play</h1>
        <p>Experience a dynamic video background effect!</p>
      </div>
      {isHovered && (
        <video
          //controls
          preload="auto"  
          className={styles.backgroundVideo}
          autoPlay
          src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
          loop
          muted
        />
      )}
    </div>
  );
};

export default VideoHover;
