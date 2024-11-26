import React from "react";
import styles from "./page.module.css";

const OtherServices = () => {
  const services = [
    { title: "Communication Strategy", description: "Developing impactful communication strategies for your brand." },
    { title: "Web Design", description: "Creating intuitive and aesthetic web experiences for users." },
    { title: "Photography", description: "Capturing the essence of your brand through visuals." },
    { title: "Video Production", description: "Telling compelling stories through video content." },
  ];

  return (
    <section className={styles.card}>
      <h2 className={styles.sectionTitle}>Other Services</h2>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardBackground}></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherServices;
