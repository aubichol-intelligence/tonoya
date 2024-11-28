import React from "react";
import styles from "./page.module.css";
//import Image from "next/image";

const images = [
  { src: "https://i.ibb.co.com/6wNwM5D/Whats-App-Image-2024-11-17-at-7-29-58-PM.jpg", title: "Vivid Orange" },
  { src: "https://i.ibb.co.com/9N3LtmV/Whats-App-Image-2024-11-17-at-7-30-01-PM.jpg", title: "Lush Green" },
  { src: "https://i.ibb.co.com/DK2wbJ5/Whats-App-Image-2024-11-17-at-7-29-56-PM.jpg", title: "Deep Blue" },
  { src: "https://i.ibb.co.com/8MgfNkw/Whats-App-Image-2024-11-17-at-7-29-50-PM.jpg", title: "Warm Sunset" },
  { src: "https://i.ibb.co.com/p0nQgbG/Whats-App-Image-2024-11-17-at-7-29-42-PM.jpg", title: "Velvet Red" },
  { src: "https://i.ibb.co.com/Dtc1MWX/Whats-App-Image-2024-11-17-at-7-29-58-PM-1.jpg", title: "Bubblegum Pink" },
];

const AestheticGallery = () => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <div className={styles.card} key={index}>
          <img src={image.src} alt={image.title} className={styles.image} />
          <div className={styles.overlay}>
            <h3 className={styles.title}>{image.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AestheticGallery;
