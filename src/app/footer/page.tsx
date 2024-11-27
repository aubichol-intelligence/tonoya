"use client";
import React from "react";
import styles from "./page.module.css";
import Map from "../map/page"
import Image from "next/image";
//import Link from 'next/link'

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (


    <footer className={styles.footer}>
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          name: "Your Company Name",
          url: "https://yourwebsite.com",
          logo: "https://yourwebsite.com/logo.png",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+123456789",
              contactType: "Customer Service",
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Main Street",
            addressLocality: "Your City",
            postalCode: "12345",
            addressCountry: "Your Country",
          },
          sameAs: [
            "https://www.facebook.com/yourpage",
            "https://twitter.com/yourpage",
            "https://www.linkedin.com/in/yourpage",
          ],
        })}
      </script>

      <div className={styles.container}>
        {/* Logo and Address */}
        {/*<div className={styles.logoSection}>
        <img
          src="/logo.png"
          alt="Company Logo"
          className={styles.logo}
        />*/}
        <div className={styles.socialMedia}>
          <h4 className={styles.socialMediaHeader}>Quick Links</h4>
          <p className={styles.address}>
            123 Office St, Business City, 56789 <br />
            Contact: (123) 456-7890 <br />
            Email: info@company.com
          </p>
        </div>

        {/* Navigation Links */}
        <div className={styles.socialMedia}>
          <h4 className={styles.socialMediaHeader}>Quick Links</h4>
          <div className={styles.icons}>

            <a href="/about-us">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <h1 className={styles.socialMediaHeader}>Follow Us</h1>
          <div className={styles.icons}>
            {/*<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.png" alt="LinkedIn" />
  </a>*/}

            <a
              href="https://www.facebook.com/icsforum"
              target="_blank"
              rel="noopener noreferrer"
              className="follow-link"
            >
              Facebook
            </a>
            <a
              href="https://x.com/icsforum"
              target="_blank"
              rel="noopener noreferrer"
              className="follow-link"
            >
              Twitter
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="follow-link"
            >
              Instagram
            </a>

          </div>
        </div>

      </div>


      <Map />
      {/* Copyright and Back to Top */}
      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          Developed by <a href="https://developerportfolio.com">Your Name</a>.
        </p>
        <button className={styles.backToTop} onClick={scrollToTop}>
          Back to Top
        </button>
        {/*
        <Image
          src="/logo.png"
          alt="Company Logo"
          className={styles.logo}
        />
*/}
      </div>
    </footer>
  );
};

export default Footer;
