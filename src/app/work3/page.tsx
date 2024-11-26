import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';



const storyContent = [
  {
    id: 1,
    title: "A Story of Complementarity",
    description:
      "At Atelier Design, we believe in the power of collaboration. Our team of diverse talents combines unique perspectives to create designs that resonate deeply and tell compelling stories.",
    image: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg",
    alt: "Complementarity Image",
  },
  {
    id: 2,
    title: "Innovative Perspectives",
    description:
      "Innovation is at the core of our process. Every project we undertake reflects a fusion of modern design principles with a deep understanding of user needs.",
    image: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg",
    alt: "Innovation Image",
  },
  {
    id: 3,
    title: "Tailored Solutions",
    description:
      "We craft solutions that are not just visually appealing but also functional and tailored to meet your brand's specific requirements.",
    image: "https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg",
    alt: "Tailored Solutions Image",
  },
];

const StorySection = () => {
  return (
    <section className={styles.storySection}>
      {storyContent.map((content, index) => (
        <div
          key={content.id}
          className={`${styles.container} ${index % 2 === 0 ? styles.normal : styles.reversed
            }`}
        >
          {/* Text Column */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>{content.title}</h2>
            <p className={styles.description}>{content.description}</p>
          </div>

          {/* Image Column */}
          <div className={styles.imageContainer}>
            <Image
              src={content.image}
              alt={content.alt}
              className={styles.image}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default StorySection;

