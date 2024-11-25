import React from "react";
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
  const duplicatedImages = [...svgImages, ...svgImages];
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {duplicatedImages.map((image, index) => (
          <div className={styles.carouselItem} key={`${image.id}-${index}`}>
            <Image src={image.src} alt={image.alt} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
