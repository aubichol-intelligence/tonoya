import React from "react";
import styles from "./page.module.css";

const SideNavigation = ({ items, onSideNavSelect, activeIndex }) => {
  return (
    <div className={styles.sideNav}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`${styles.navButton} ${index === activeIndex ? styles.active : ""}`}
          
          onClick={() => onSideNavSelect(item,index)}
        >
          <h3 className={styles.text}>{item.name}</h3>
        </button>
      ))}
    </div>
  );
};

export default SideNavigation;
