import React from "react";
import styles from "./page.module.css";

const ThreeCards = () => {
  const cards1 = [
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

  const cards = [
    { 
      title: "energy efficient", 
      description: "An energy-efficient vending machine is designed to minimize power consumption while providing convenience. Equipped with advanced insulation, LED lighting, and energy-saving compressors, it maintains optimal cooling or heating with minimal waste. Smart sensors detect user activity and adjust power usage accordingly, reducing energy when the machine is idle. These machines often incorporate renewable energy sources, such as solar panels, to further lower their environmental impact. By combining technology and sustainability, energy-efficient vending machines offer a cost-effective and eco-friendly solution for modern snack and beverage needs.." 
    },
    { 
      title: "energy efficient", 
      description: "An energy-efficient vending machine is designed to minimize power consumption while providing convenience. Equipped with advanced insulation, LED lighting, and energy-saving compressors, it maintains optimal cooling or heating with minimal waste. Smart sensors detect user activity and adjust power usage accordingly, reducing energy when the machine is idle. These machines often incorporate renewable energy sources, such as solar panels, to further lower their environmental impact. By combining technology and sustainability, energy-efficient vending machines offer a cost-effective and eco-friendly solution for modern snack and beverage needs.." 
    },
    { 
      title: "energy efficient", 
      description: "An energy-efficient vending machine is designed to minimize power consumption while providing convenience. Equipped with advanced insulation, LED lighting, and energy-saving compressors, it maintains optimal cooling or heating with minimal waste. Smart sensors detect user activity and adjust power usage accordingly, reducing energy when the machine is idle. These machines often incorporate renewable energy sources, such as solar panels, to further lower their environmental impact. By combining technology and sustainability, energy-efficient vending machines offer a cost-effective and eco-friendly solution for modern snack and beverage needs.." 
    },
    { 
      title: "energy efficient", 
      description: "An energy-efficient vending machine is designed to minimize power consumption while providing convenience. Equipped with advanced insulation, LED lighting, and energy-saving compressors, it maintains optimal cooling or heating with minimal waste. Smart sensors detect user activity and adjust power usage accordingly, reducing energy when the machine is idle. These machines often incorporate renewable energy sources, such as solar panels, to further lower their environmental impact. By combining technology and sustainability, energy-efficient vending machines offer a cost-effective and eco-friendly solution for modern snack and beverage needs.." 
    },
  ];

  return (
    <section className={styles.cardSection}>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <div key={card.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <div className={styles.divider}></div>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreeCards;
