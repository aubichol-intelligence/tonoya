"use client";

import React from "react";
import styles from "./page.module.css";

const steps = [
  {
    id: 1,
    title: "Browse Products",
    description: "Explore our catalog and choose the products you like.",
    icon: "/icons/browse.svg", // Replace with your icons
  },
  {
    id: 2,
    title: "Add to Cart",
    description: "Add selected products to your cart for checkout.",
    icon: "/icons/cart.svg",
  },
  {
    id: 3,
    title: "Delivery",
    description: "Receive your order at your doorstep.",
    icon: "/icons/delivery.svg",
  },
];

const OrderingProcessVisual = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ordering Process</h2>

      {/* Steps Wrapper */}
      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <div key={step.id} className={styles.step}>
            <div className={styles.iconWrapper}>
              <img src={step.icon} alt={step.title} className={styles.icon} />
            </div>
            <div className={styles.stepTitle}>{step.title}</div>
            <p className={styles.stepDescription}>{step.description}</p>
            {index < steps.length - 1 && (
              <div className={styles.connector}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderingProcessVisual;
