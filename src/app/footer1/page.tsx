"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from "react-icons/fa";
import dynamic from "next/dynamic";
import styles from "./page.module.css";

const Map = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section: Map and Address */}
        <div className={styles.mapSection}>
          <div className={styles.mapContainer}>
            <Map center={[40.7128, -74.006]} zoom={13} scrollWheelZoom={false} className={styles.map}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[40.7128, -74.006]}>
                <Popup>Our Office</Popup>
              </Marker>
            </Map>
          </div>
          <address className={styles.address}>
            <strong>Your Company Name</strong>
            <p>123 Main Street, Your City, Your State, 12345</p>
            <p>Phone: +1-800-555-5555</p>
            <p>Email: contact@yourcompany.com</p>
          </address>
        </div>

        {/* Middle Section: Links */}
        <div className={styles.links}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Section: Social Media */}
        <div className={styles.socialMedia}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <p>Developed by Your Developer Name</p>
        <button onClick={scrollToTop} className={styles.backToTop}>
          <FaArrowUp />
        </button>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Your Company Name",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/yourcompany",
              "https://www.twitter.com/yourcompany",
              "https://www.instagram.com/yourcompany",
              "https://www.linkedin.com/company/yourcompany"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-800-555-5555",
              "contactType": "Customer Service",
              "areaServed": "Worldwide",
              "availableLanguage": ["English"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Your City",
              "addressRegion": "Your State",
              "postalCode": "12345",
              "addressCountry": "Your Country"
            }
          })
        }}
      />
    </footer>
  );
};

export default Footer;
