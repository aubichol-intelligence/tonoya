"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const HoverAnimation = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const items = [
    {
      text: "Strategy",
      video: "https://streamable.com/k7ifup",
    },
    {
      text: "Design",
      video: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    },
    
  ];

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          <span>{item.text}</span>
          {hoveredIndex === index && (
            <video
              src={item.video}
              autoPlay
              loop
              muted
              className={styles.backgroundVideo}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default HoverAnimation;
