
"use client"
import React from "react";
import styles from "./page.module.css";
import Product from "../product/page";
import Speciality from "../work5/page";
//import Institution from "../carousal2/page";

export default function Home() {
  return (
    <div>
        <div className={styles.container}>
        {/* 3D Animated Background */}
        <div className={styles.background}>
            
        </div>

        {/* Main content */}
        <div className={styles.content}>
            <div className={styles.image}>
            <img src="https://i.ibb.co.com/qyFfTFN/file.png" alt="Product" />
            </div>
            <div className={styles.text}>
            <h1>Welcome to Tonoya</h1>
            <p>Discover the amazing features of our innovative solution.</p>
            <button className={styles.button}>Learn More</button>
            </div>
        </div>
        </div>

        <Product/>
        <Speciality/>
    </div>
  );
}
