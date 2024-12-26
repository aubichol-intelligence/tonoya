import React from 'react';
import styles from './page.module.css';

const ProductView = ({
  product,
}: {
  product: {
    name: string;
    capacity: number;
    weight: number;
    payment: string;
  };
}) => {
  const specifications = [
    { key: "Model", value: product.name },
    {key: "Single Pad Capacity", value: product.capacity },
    /*{ key: "Dimensions", value: "Height: 1800mm, Width: 1000mm, Depth: 750mm" },*/
    { key: "Weight", value: product.weight },
    { key: "Operating Voltage", value: 220 },
    { key: "Dispense Mechanism", value: "Spiral Rotation" },
    { key: "Payment Options", value: product.payment },
    { key: "Temperature Range", value: "2°C to 8°C (for chilled items)" },
    { key: "Display Size", value: "4.5 inches(diagonal)" },
    { key: "Spring Material", value: "Stainless steel" },
    { key: "Body Material", value: "Color-Coated Rust-Proof Galvanized Sheet" },
    { key: "Online Connectivity", value: "" },
    { key: "Body Color", value: "Black" },
    { key: "Door Color", value: "Customized with Laminated Vinyl Stickers" },
    { key: "Window Material", value: "Transparent Acrylic Sheet" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Vending Machine Specifications</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Specification</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec, index) => (
            <tr key={index}>
              <td>{spec.key}</td>
              <td>{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductView;
