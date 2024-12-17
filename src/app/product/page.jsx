'use client';

import React,  {useState } from "react";
import TopNavigation from "../../components/Product2/TopNavigation/index";
import SideNavigation from "../../components/Product2/SideNavigation/index";
import ProductView from "../../components/Product2/ProductView/index";
import { products } from "../../../public/data";
import styles from "./page.module.css";
import MachineSpecification from "../../components/machineSpecification1/page";

const Home = () => {
  const [activeTopNav, setActiveTopNav] = useState(0);
  const [activeSideNav, setActiveSideNav] = useState(0);
  const [topNavName, setTopNavName] = useState("TSPVM0160");
  const [selectedProduct, setSelectedProduct] = useState(products["TSPVM0160"][0]);

  const handleTopNavSelect = (index) => {
    setActiveTopNav(index);
    const category = Object.keys(products)[index];
    setSelectedProduct(products[category][0]);
    setTopNavName(category)
  };

  const handleSideNavSelect = (product, index) => {
    setSelectedProduct(product);

    setActiveSideNav(index);
//    const category = Object.keys(products)[index];
    setSelectedProduct(products[topNavName][index]);
  };

  const sideNavItems = products[Object.keys(products)[activeTopNav]];

  return (
    <div className={styles.container}>
      <h1 className={styles.headerText}>Tonoya Vending Machine</h1>
      <TopNavigation onTopNavSelect={handleTopNavSelect} activeIndex={activeTopNav} />
      <div className={styles.content}>
        <SideNavigation items={sideNavItems} onSideNavSelect={handleSideNavSelect} activeIndex={activeSideNav}/>
        <ProductView product={selectedProduct} />
      </div>
      <MachineSpecification product={selectedProduct}/>
    </div>
  );
};

export default Home;
