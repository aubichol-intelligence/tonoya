"use client"

import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
//import Image from "next/image";

const VisualSection = () => {
  const items = [
    {
      title: "Creative Vision",
      description: "Innovative strategies and ideas to enhance your brand presence.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Collaborative Design",
      description: "Building partnerships that bring designs to life.",
      image: "https://via.placeholder.com/600x400",
    },
    {
      title: "Strategic Focus",
      description: "Data-driven approaches to ensure your success.",
      image: "https://via.placeholder.com/600x400",
    },
  ];

  return (
    <div className={styles.section}>
      {items.map((item, index) => (
        <motion.div
          className={styles.card}
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className={styles.imageContainer}>
            <img src={item.image} alt={item.title} className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VisualSection;
