'use client'
import React from "react";
import styles from "./page.module.css";
//import Map from "../map/page"
//import Image from "next/image";
import Link from 'next/link'
import { NextPage } from "next";
import dynamic from 'next/dynamic';


const Footer: NextPage = () => {
//  const scrollToTop = () => {    if (typeof window !== "undefined") {      window.scrollTo({ top: 0, behavior: "smooth" });    }  };
  
  const NotSSRMaps = dynamic(() => import('../map/page'), {
    ssr: false,
  });
  
  return (
    <footer className={styles.footer}>
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Organization",
          name: "Sunbeam Force Limited",
          url: "https://yourwebsite.com",
          logo: "https://tonoyabd.com/logo.png",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+123456789",
              contactType: "Customer Service",
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "270, Sultanganj Road, Rayer Bazar",
            addressLocality: "Dhaka",
            postalCode: "1209",
            addressCountry: "Bangladesh",
          },
          sameAs: [
            "https://www.facebook.com/yourpage",
            "https://twitter.com/yourpage",
            "https://www.linkedin.com/in/yourpage",
          ],
        })}
      </script>

      <NotSSRMaps />
      <div className={styles.container}>
        {/* Logo and Address */}
        {/*<div className={styles.logoSection}>
        <img
          src="/logo.png"
          alt="Company Logo"
          className={styles.logo}
        />*/}
        <div className={styles.socialMedia}>
          <h4 className={styles.socialMediaHeader}>Address</h4>
          <p className={styles.address}>
            270, Sultanganj Road, Dhaka <br />
            Contact: +8801705686655 <br />
            Email: sunbeamforce@gmail.com
          </p>
        </div>

        {/* Navigation Links */}
        <div className={styles.socialMedia}>
          <h4 className={styles.socialMediaHeader}>Quick Links</h4>
          <div className={styles.icons}>

          <Link href="/">Home</Link>
          <Link href="/gallery3">Gallery</Link>
          <Link href="/form1">Contact Us</Link>
          <Link href="/blog">Blog</Link>
 
          </div>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <h1 className={styles.socialMediaHeader}>Follow Us</h1>
          <div className={styles.icons}>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="follow-link"
            >
              Facebook
            </a>
            <a
              href="https://x.com/"
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

      {/* Copyright and Back to Top */}
      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} Sun Beam Force Limited. All rights reserved.
          Developed by <a href="https://aubichol.com">Aubichol Intelligent Technologies</a>.
        </p>
        {/*
        <button className={styles.backToTop} onClick={scrollToTop}>
          Back to Top
        </button>
        */}
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
