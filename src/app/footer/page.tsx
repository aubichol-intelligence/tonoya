"use client";
import React from "react";
import styles from "./page.module.css";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      {/* Logo and Address */}
      <div className={styles.logoSection}>
        <img
          src="/logo.png"
          alt="Company Logo"
          className={styles.logo}
        />
        <p className={styles.address}>
          123 Office St, Business City, 56789 <br />
          Contact: (123) 456-7890 <br />
          Email: info@company.com
        </p>
      </div>

      {/* Navigation Links */}
      <div className={styles.links}>
        <h4 className={styles.h4}>Quick Links</h4>
        <ul>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className={styles.socialMedia}>
        <h1>Follow Us</h1>
        <div className={styles.icons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Google Map */}
      <div className={styles.map}>
        <h4 className={styles.h4}>Our Location</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Office Location"
        ></iframe>
      </div>

      {/* Copyright and Back to Top */}
      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved. 
          Developed by <a href="https://developerportfolio.com">Your Name</a>.
        </p>
        <button className={styles.backToTop} onClick={scrollToTop}>
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
