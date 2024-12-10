import React from "react";
import styles from "./page.module.css";

const carouselItems = [
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Innovation in AI",
    description: "Discover how artificial intelligence is shaping the future.Discover how artificial intelligence is shaping the future.Discover how artificial intelligence is shaping the future.Discover how artificial intelligence is shaping the future.",
  },
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Sustainable Design",
    description: "Learn about the latest trends in sustainable design.Learn about the latest trends in sustainable design.Learn about the .",
  },
  {
    image: "https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg",
    headline: "Blockchain Revolution",
    description: "Explore the role of blockchain in transforming industries.of blockchain in transforming industries.of blockchain in transforming industries.",
  },
];

const CarouselSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}><h1 className={styles.headerText}>Explore Trending Tonoya Publications</h1></div>
      <div className= {styles.cardContainer}>
        {carouselItems.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.headline} className={styles.image} />
            <h3 className={styles.headline}>{item.headline}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
      <button className={styles.button}>Read More Thoughts</button>
    </section>
  );
};

export default CarouselSection;
