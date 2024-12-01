"use client";

import React from "react";
import { FaCubes, FaCreditCard, FaRulerCombined, FaStoreAlt } from "react-icons/fa";
import styles from "./page.module.css";

const cards = [
  { 
    id: 1,
    title: "energy efficient", 
    capacity: "160",
    size: "30*12*6",
    paymentMethod: "Credit Card, Cash, Mobile Wallet",
  },
  { 
    id: 2,
    title: "energy efficient", 
    capacity: "120",
    size: "30*12*6",
    paymentMethod: "Credit Card, Cash, Mobile Wallet",
    
  },
  { 
    id: 3,
    title: "energy efficient", 
    capacity: "60",
    size: "30*12*6",
    paymentMethod: "Credit Card, Cash, Mobile Wallet",
    
  },
  
  { 
    id: 4,
    title: "energy efficient", 
    capacity: "40",
    size: "30*12*6",
    paymentMethod: "Credit Card, Cash, Mobile Wallet",
    
  },
];
export default function VendingMachineCard(){
  return (
    
      
    <div className={styles.cardContainer}>
          {cards.map((card) => (
      
      <div key={card.id} className={styles.card}>
        {/* Vending Machine Icon 
        <div className={styles.iconWrapper}>
          <FaStoreAlt className={styles.mainIcon} />
        </div>*/}

        
        {/* Details Section */}
        <div className={styles.details}>
          {/* Capacity Section */}
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <FaCubes />
            </div>
            <div>
              <h3 className={styles.title}>Capacity</h3>
              <p className={styles.description}>{card.capacity}</p>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <FaCreditCard />
            </div>
            <div>
              <h3 className={styles.title}>Payment Methods</h3>
              <p className={styles.description}>{card.paymentMethod}</p>
            </div>
          </div>

          {/* Size Section */}
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <FaRulerCombined />
            </div>
            <div>
              <h3 className={styles.title}>Size</h3>
              <p className={styles.description}>{card.size}</p>
            </div>
          </div>
        </div>
      </div>
      ))}
        </div>
        
        
    
  );
};


