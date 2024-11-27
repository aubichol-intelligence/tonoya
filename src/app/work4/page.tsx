import React from "react";
import styles from "./page.module.css";
//import Image from "next/image";

const sections = [
  {
    id: 1,
    title: "Communication Strategy",
    description:
      "Crafting clear and effective strategies to ensure your brand message reaches its audience with impact.",
    image: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg",
    alt: "Communication Strategy Image",
  },
  {
    id: 2,
    title: "Brand Quality",
    description:
      "Ensuring every element of your brand reflects excellence and resonates with your audience.",
    image: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg",
    alt: "Brand Quality Image",
  },
  {
    id: 3,
    title: "Website Design",
    description:
      "Designing seamless, aesthetically pleasing websites that align with your brand's vision.",
    image: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg",
    alt: "Website Design Image",
  },
];

const StrategySection = () => {
  return (
    <section className={styles.strategySection}>
      <div className={styles.heading}>
        <h2 className={styles.title}>Our Expertise</h2>
        <p className={styles.subtitle}>
          Delivering exceptional strategies and designs tailored to your brand&apos needs.
        </p>
      </div>
      <div className={styles.cards}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`${styles.card} ${index % 2 === 0 ? styles.normal : styles.reversed
              }`}
          >
            {/* Text Block */}
            <div className={styles.textContent}>
              <h3 className={styles.cardTitle}>{section.title}</h3>
              <p className={styles.cardDescription}>{section.description}</p>
            </div>
            {/* Image Block */}
            <div className={styles.imageContainer}>
              <img
                src={section.image}
                alt={section.alt}
                className={styles.cardImage}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategySection;
