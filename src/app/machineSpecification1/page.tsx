"use client";
import React from 'react';
import styles from './page.module.css';

const VendingMachineSpecifications = () => {
  const specifications = [
    { key: "Model", value: "VM-300X" },
    {key: "Single Pad Capacity", value: "160pcs/120pcs/80pcs/40pcs" },
    /*{ key: "Dimensions", value: "Height: 1800mm, Width: 1000mm, Depth: 750mm" },*/
    { key: "Weight", value: "7/11/15 kg" },
    { key: "Operating Voltage", value: "220 Volt, Max 60Wattat the time of dispensing" },
    { key: "Dispense Mechanism", value: "Spiral Rotation" },
    { key: "Payment Options", value: "Card, Cash, Mobile Wallet" },
    { key: "Temperature Range", value: "2°C to 8°C (for chilled items)" },
    { key: "Display Size", value: "4.5 inches(diagonal)" },
    { key: "Spring Material", value: "Stainless steel" },
    { key: "Body Material", value: "Color-Coated Rust-Proof Galvanized Mrtal Sheet" },
    { key: "Online Connectivity", value: "via Wi-Fi, via SIM Cards" },
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

export default VendingMachineSpecifications;
