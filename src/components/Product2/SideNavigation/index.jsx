import React from "react";
import styles from "./page.module.css";

const SideNavigation = ({ items, onSideNavSelect }) => {
  return (
    <div className={styles.sideNav}>
      {items.map((item, index) => (
        <button
          key={index}
          className={styles.navButton}
          onClick={() => onSideNavSelect(item)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default SideNavigation;
