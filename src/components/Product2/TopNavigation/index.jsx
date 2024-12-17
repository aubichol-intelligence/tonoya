
import React from "react";
import styles from "./page.module.css";

const TopNavigation = ({ onTopNavSelect, activeIndex }) => {
  const navItems = ["TSVPM0160", "TSVPM0080", "TSVPM0120", "TSVPM0040"];

  return (
    <div className={styles.topNav}>
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`${styles.navButton} ${index === activeIndex ? styles.active : ""}`}
          onClick={() => onTopNavSelect(index)}
        >
          <h3 className={styles.text}>{item}</h3>
          
        </button>
      ))}
    </div>
  );
};

export default TopNavigation;
