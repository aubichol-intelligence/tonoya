import React from "react";
import styles from "./page.module.css";

const ThreeCards = () => {
 
  const cards1 = [
    { 
      id: 1,
      title: "Remote Access", 
      description: "Tonoya gives access to hygiene and health for women in remote areas. It also serves as a easy solution specially for workplaces. For instance, students in educational institutions or working women in hectic work environments are a direct benefitiary of our product." 
    },
    { 
      id: 2,
      title: "Simple Payment", 
      description: "In Tonoya, the payment process is simple. Our machine detects cash starting from 10 taka which allows customers to buy products in small amounts. Customers also feel comfort with our highly reliable cash detection mechanism that ensures safe transaction." 
    },
    { 
      id: 3,
      title: "Aesthetic Pleasure", 
      description: "Tonoya's vending machine is aesthetically pleasing and encourages with customers to use the product. Due to Tonoya's availability in public places, it encourages people to be more open about menstrual health. It creates the opportunity for women to break out of stigma that is existent around women's physical and psychological safety." 
    },
    
  ];
  return (
    <section className={styles.cardSection}>
      <h2 className={styles.headerText}>Tonoya Solves Your Problems</h2>
      <p className={styles.secondaryText}>We Excel At Ease, Style and Simplicity</p>
      <div className={styles.cardsContainer}>
        {cards1.map((card) => (
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
