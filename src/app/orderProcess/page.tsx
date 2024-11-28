"use client";

import React from "react";
import styles from "./page.module.css";

const steps = [
  {
    step: "Step 1",
    title: "Browse Products",
    description: "Explore our wide range of products and find your favorite items.",
    icon: "/icons/browse.svg", // Replace with your actual icon paths
  },
  {
    step: "Step 2",
    title: "Add to Cart",
    description: "Select the products you like and add them to your cart.",
    icon: "/icons/cart.svg",
  },
  {
    step: "Step 3",
    title: "Place Order",
    description: "Provide your details and confirm the order to proceed.",
    icon: "/icons/order.svg",
  },
  {
    step: "Step 4",
    title: "Enjoy Delivery",
    description: "Sit back and relax while we deliver your order to your doorstep.",
    icon: "/icons/delivery.svg",
  },
];

const OrderingProcess = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>How It Works</h2>
      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <div className={styles.iconWrapper}>
              <img src={step.icon} alt={step.title} className={styles.icon} />
            </div>
            <div className={styles.stepInfo}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderingProcess;
