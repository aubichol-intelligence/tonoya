/*import React from 'react';
import styles from './page.module.css';

const Sidebar = ({ menuIndex, onItemClick }) => {
  if (menuIndex === null) return null;

  return (
    <div className={styles.sidebar}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <button key={idx} onClick={() => onItemClick(idx)} className={styles.sidebarButton}>
          Submenu {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;*/
// Static Product Data
export const products = [
  {
    id: 1,
    name: "Product 1",
    image: "/product-1.jpg", // Replace with actual image paths in the `/public` folder
    description: "This is the description for Product 1.",
  },
  {
    id: 2,
    name: "Product 2",
    image: "/product-2.jpg",
    description: "This is the description for Product 2.",
  },
  {
    id: 3,
    name: "Product 3",
    image: "/product-3.jpg",
    description: "This is the description for Product 3.",
  },
  {
    id: 4,
    name: "Product 4",
    image: "/product-4.jpg",
    description: "This is the description for Product 4.",
  },
];



import React from "react";
import styles from "./page.module.css";

const SideNavigation = ({ }) => {
  const navItems = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
  ];

  return (
    <div className={styles.sideNav}>
      {navItems.map((item, index) => (
        <button
          key={index}
//          onClick={() => onSideNavSelect(index)}
          className={styles.navButton}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SideNavigation;
