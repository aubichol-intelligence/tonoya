"use client";
import React from 'react';
import styles from './page.module.css';


const MachineSpecification = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Machine Model: XYZ-500</h1>
        <p>High-performance industrial machine for precision manufacturing</p>
      </div>

      <div className={styles.specifications}>
        <div className={styles.card}>
          <h3>Dimensions</h3>
          <p>Length: 2500mm</p>
          <p>Width: 1200mm</p>
          <p>Height: 1800mm</p>
        </div>
        <div className={styles.card}>
          <h3>Power</h3>
          <p>3.5 kW</p>
          <p>Voltage: 230V</p>
          <p>Frequency: 50 Hz</p>
        </div>
        <div className={styles.card}>
          <h3>Weight</h3>
          <p>1500 kg</p>
        </div>
        <div className={styles.card}>
          <h3>Speed</h3>
          <p>Max Speed: 3500 RPM</p>
          <p>Acceleration: 0-100 RPM in 2 sec</p>
        </div>
      </div>

      <div className={styles.callToAction}>
        <button className={styles.button}>Request a Quote</button>
      </div>
    </div>
  );
};

export default MachineSpecification;
