import React from "react";
import styles from "./page.module.css";

const carouselItems = [
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Innovation in AI",
    description: "Discover how artificial intelligence is shaping the future.",
  },
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Sustainable Design",
    description: "Learn about the latest trends in sustainable design.",
  },
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Blockchain Revolution",
    description: "Explore the role of blockchain in transforming industries.",
  },
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Remote Work Trends",
    description: "Understand the impact of remote work on global businesses.",
  },
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Innovation in AI",
    description: "Discover how artificial intelligence is shaping the future.",
  },
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Sustainable Design",
    description: "Learn about the latest trends in sustainable design.",
  },
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Blockchain Revolution",
    description: "Explore the role of blockchain in transforming industries.",
  },
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Remote Work Trends",
    description: "Understand the impact of remote work on global businesses.",
  },
];

const CarouselSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.carousel}>
        {carouselItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.headline} className={styles.image} />
            <h3 className={styles.headline}>{item.headline}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
