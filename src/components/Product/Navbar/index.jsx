import React from 'react';
import styles from './page.module.css';

const Navbar = ({ onMenuClick }) => {
  return (
    <nav className={styles.navbar}>
      {['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'].map((item, index) => (
        <button key={index} onClick={() => onMenuClick(index)} className={styles.navButton}>
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
