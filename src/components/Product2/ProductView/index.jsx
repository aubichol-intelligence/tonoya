import React from "react";
import styles from "./page.module.css";
import { FaCubes, FaCreditCard, FaRulerCombined } from "react-icons/fa";


const ProductView = ({ product }) => {
  if (!product) return <div className={styles.productView}>No product selected.</div>;

  return (
    <div className={styles.productView}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      {/*<div className={styles.productDescription}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
  </div>*/}
  
  
      
      <div  className={styles.card}>
      <h2>{product.name}</h2>
        {/*<p>{product.description}</p>*/}
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
              <p className={styles.description}>card.capacity</p>
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <FaCreditCard />
            </div>
            <div>
              <h3 className={styles.title}>Payment Methods</h3>
              <p className={styles.description}>card.paymentMethod</p>
            </div>
          </div>

          {/* Size Section */}
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <FaRulerCombined />
            </div>
            <div>
              <h3 className={styles.title}>Size</h3>
              <p className={styles.description}>card.size</p>
            </div>
          </div>

          {/*Display Size Section*/}
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <FaCubes />
            </div>
            <div>
              <h3 className={styles.title}>Display Size</h3>
              <p className={styles.description}>card.capacity</p>
            </div>
          </div>

          {/*Material Section*/}
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <FaCubes />
            </div>
            <div>
              <h3 className={styles.title}>Material</h3>
              <p className={styles.description}>card.capacity</p>
            </div>
          </div>

          {/*Online Connectivity Section*/}
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <FaCubes />
            </div>
            <div>
              <h3 className={styles.title}>Online Connectivity</h3>
              <p className={styles.description}>card.capacity</p>
            </div>
          </div>

          {/*Operating Voltage Section*/}
          <div className={styles.detailItem}>
            <div className={styles.detailIcon}>
              <FaCubes />
            </div>
            <div>
              <h3 className={styles.title}>Operating Voltage</h3>
              <p className={styles.description}>card.capacity</p>
            </div>
          </div>


        </div>
      </div>
     
        
        
    </div>
  );
};

export default ProductView;
