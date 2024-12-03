import React from 'react';
import styles from './page.module.css';

const ProductView = ({ productIndex }) => {
  if (productIndex === null) return null;

  const product = {
    image: `/product-${productIndex + 1}.jpg`, // Replace with actual images
    description: `Product ${productIndex + 1} description goes here.`,
  };

  return (
    <div className={styles.productView}>
      <img src='https://i.ibb.co.com/60KQ3x3/Tonoya-Product.jpg' alt={`Product ${productIndex + 1}`} className={styles.productImage} />
      <p className={styles.productDescription}>{product.description}</p>
    </div>
  );
};

export default ProductView;
