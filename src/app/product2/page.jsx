'use client';
import React,  {useState } from "react";
import TopNavigation from "../../components/Product2/TopNavigation/index";
import SideNavigation from "../../components/Product2/SideNavigation/index";
import ProductView from "../../components/Product2/ProductView/index";
import { products } from "../../../public/data";
import styles from "./page.module.css";

const Home = () => {
  const [activeTopNav, setActiveTopNav] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(products["TSPVM0160"][0]);

  const handleTopNavSelect = (index) => {
    setActiveTopNav(index);
    const category = Object.keys(products)[index];
    setSelectedProduct(products[category][0]);
  };

  const handleSideNavSelect = (product) => {
    setSelectedProduct(product);
  };

  const sideNavItems = products[Object.keys(products)[activeTopNav]];

  return (
    <div className={styles.container}>
      <TopNavigation onTopNavSelect={handleTopNavSelect} activeIndex={activeTopNav} />
      <div className={styles.content}>
        <SideNavigation items={sideNavItems} onSideNavSelect={handleSideNavSelect} />
        <ProductView product={selectedProduct} />
      </div>
    </div>
  );
};

export default Home;
