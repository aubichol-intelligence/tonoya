/*import React from 'react';
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

export default ProductView;*/

import React from "react";
import styles from "./page.module.css";


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


const ProductView = ({ productIndex }) => {
  if (productIndex === null) {
    return (
      <div className={styles.productView}>
        <p>Please select a product to view details.</p>
      </div>
    );
  }

  const product = products[productIndex];

  return (
    <div className={styles.productView}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />
      <h3>{product.name}</h3>
      <p className={styles.productDescription}>{product.description}</p>
    </div>
  );
};

export default ProductView;

