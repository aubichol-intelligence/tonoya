"use client";
import React, { useState } from 'react';
import Navbar from '../../components/Product/Navbar/index';
import Sidebar from '../../components/Product/Sidebae/index';
import ProductView from '../../components/Product/ProductView/index';
import styles from './page.module.css';

const Home = () => {
  const [menuIndex, setMenuIndex] = useState(null);
  const [productIndex, setProductIndex] = useState(null);

  return (
    <div className={styles.container}>
      <Navbar onMenuClick={setMenuIndex} />
      <div className={styles.main}>
        <Sidebar menuIndex={menuIndex} onItemClick={setProductIndex} />
        <ProductView productIndex={productIndex} />
      </div>
    </div>
  );
};

export default Home;
