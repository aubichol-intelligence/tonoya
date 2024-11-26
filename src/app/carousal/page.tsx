
"use client";

import React, { useRef } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const svgImages = [
  { id: 1, src: "https://i.ibb.co.com/qJBw5kK/DIU.jpg", alt: "SVG 1" },
  { id: 2, src: "https://i.ibb.co.com/qJBw5kK/DIU.jpg", alt: "SVG 2" },
  { id: 3, src: "https://i.ibb.co.com/qJBw5kK/DIU.jpg", alt: "SVG 3" },
  { id: 4, src: "https://i.ibb.co.com/qJBw5kK/DIU.jpg", alt: "SVG 4" },
  { id: 5, src: "https://i.ibb.co.com/qJBw5kK/DIU.jpg", alt: "SVG 5" },
];

const Carousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);;

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust the scroll amount based on your item width
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - scrollAmount,
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const scrollAmount = 300; // Adjust the scroll amount based on your item width
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + scrollAmount,
        behavior: "smooth", // Smooth scroll effect
      });
    }
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel} ref={carouselRef}>
        {svgImages.map((image) => (
          <div className={styles.carouselItem} key={image.id}>
            <Image src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
      <div className={styles.controls}>
        <button className={styles.controlButton} onClick={scrollLeft}>
          ◀️
        </button>
        <button className={styles.controlButton} onClick={scrollRight}>
          ▶️
        </button>
      </div>
    </div>
  );
};

export default Carousel;
