"use client";

import React, { useState } from "react";
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
    title: "Place Order",
    description: "Provide shipping details and place your order.",
    icon: "/icons/order.svg",
  },
  {
    id: 4,
    title: "Delivery",
    description: "Receive your order at your doorstep.",
    icon: "/icons/delivery.svg",
  },
];

const OrderingProcessVisual = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ordering Process</h2>

      {/* Steps and Progress Bar */}
      <div className={styles.stepsWrapper}>
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`${styles.step} ${
              currentStep >= step.id ? styles.activeStep : ""
            }`}
            onClick={() => setCurrentStep(step.id)} // Optional step navigation
          >
            <div className={styles.iconWrapper}>
              <img src={step.icon} alt={step.title} className={styles.icon} />
            </div>
            <div className={styles.stepTitle}>{step.title}</div>
            {index < steps.length - 1 && (
              <div
                className={`${styles.connector} ${
                  currentStep > step.id ? styles.activeConnector : ""
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Details */}
      <div className={styles.detailsWrapper}>
        <h3 className={styles.detailsTitle}>{steps[currentStep - 1].title}</h3>
        <p className={styles.detailsDescription}>
          {steps[currentStep - 1].description}
        </p>
        <div className={styles.navigation}>
          {currentStep > 1 && (
            <button
              className={styles.button}
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </button>
          )}
          {currentStep < steps.length && (
            <button
              className={styles.button}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderingProcessVisual;
