import React from "react";
import styles from "./page.module.css";

const ThreeCards = () => {
  const cards = [
    {
      id: 1,
      title: "Communication Strategy",
      description:
        "We prioritize clear and impactful communication to connect ideas with the right audience effectively.",
    },
    {
      id: 2,
      title: "Brand Quality",
      description:
        "Our commitment is to maintain the utmost quality in branding to represent your vision authentically.",
    },
    {
      id: 3,
      title: "Website Design",
      description:
        "We craft seamless, innovative websites that captivate and deliver functionality in every click.",
    },
  ];

  return (
    <section className={styles.cardSection}>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeCards;
