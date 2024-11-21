"use client"

import React from "react";
import {motion} from "framer-motion";
import styles from "./page.module.css";

const images = [
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Vivid Orange" },
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Lush Green" },
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Deep Blue" },
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Warm Sunset" },
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Velvet Red" },
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Bubblegum Pink" },
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Golden Hour" },
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Fresh Mint" },
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Crimson Glow" },
    { src: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg", title: "Crimson Glow" },
  ];

const AestheticGallery = () => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <motion.div
          className={styles.card}
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.2,
            duration: 0.6,
            type: "spring",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={image.src} alt={image.title} className={styles.image} />
          <div className={styles.overlay}>
            <h3 className={styles.title}>{image.title}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AestheticGallery;
