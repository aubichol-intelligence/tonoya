import React from "react";
import styles from "./page.module.css";



const ProductView = ({ product }) => {
  if (!product) return <div className={styles.productView}>No product selected.</div>;

  return (
    <div className={styles.productView}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.productDescription}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductView;
