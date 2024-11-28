"use client";

import React from "react";
import styles from "./page.module.css";

const steps = [
  {
    id: 1,
    title: "Browse Products",
    description: "Explore our catalog and choose the products you like.",
  },
  {
    id: 2,
    title: "Add to Cart",
    description: "Add your selected products to the cart.",
  },
  {
    id: 3,
    title: "Delivery",
    description: "Receive your order at your doorstep.",
  },
];

const OrderingProcessStepper = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ordering Process</h2>

      {/* Stepper Wrapper */}
      <div className={styles.stepperWrapper}>
        {steps.map((step, index) => (
          <div key={step.id} className={styles.step}>
            {/* Step Indicator */}
            <div className={styles.stepIndicator}>
              <span className={styles.stepNumber}>{step.id}</span>
            </div>

            {/* Step Details */}
            <div className={styles.stepDetails}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && <div className={styles.connector}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderingProcessStepper;
