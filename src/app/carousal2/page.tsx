"use client";

import React from "react";
import styles from "./page.module.css";

const svgImages = [
    { id: 1, src: "https://i.ibb.co.com/qJBw5kK/DIU.jpg", alt: "SVG 1" },
    { id: 2, src: "https://i.ibb.co.com/qJBw5kK/DIU.jpg", alt: "SVG 2" },
    { id: 3, src: "https://i.ibb.co.com/qJBw5kK/DIU.jpg", alt: "SVG 3" },
    
  ];

const Carousel = () => {
  // Duplicate the images array multiple times for smooth scrolling
  const repeatedImages = Array(5)
    .fill(svgImages)
    .flat();

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {repeatedImages.map((image, index) => (
          <div className={styles.carouselItem} key={`${image.id}-${index}`}>
            <img src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
