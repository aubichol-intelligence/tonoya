'use client'

import React from "react";
import styles from "./page.module.css";
//import Map from "../map/page"
import Image from "next/image";
import Link from 'next/link';
import { NextPage } from "next";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import imageLocation from '../../../public/logos/tonoya.png';


const Footer: NextPage = () => {
//  const scrollToTop = () => {    if (typeof window !== "undefined") {      window.scrollTo({ top: 0, behavior: "smooth" });    }  };
const router = useRouter();

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
          url: "https://tonoyabd.com",
          logo: "https://tonoyabd.com/logo.png",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "8801705686655",
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

      
      <div className={styles.container}>
        {/* Logo and Address */}
        {/*<div className={styles.logoSection}>
        <img
          src="/logo.png"
          alt="Company Logo"
          className={styles.logo}
        />*/}

       <div className={styles.socialMedia}>
          <div className={styles.logoFooter1}>
                      <button
                          className={styles.logoButton}
                          onClick={() => router.push('/')}
                      >
                          <Image
                              src={imageLocation}
                              // src="../../../public/logos/CHP-LOGO-1.png"
                              alt="Logo"
                              className={styles.logoImage}
                              priority
                              width={100}
                              height={60}
                          />
                      </button>
                  </div>
          <div className={styles.icons}>
            <p>Tonoya is a one stop solution for sanitary pads </p>
          </div>
        </div>

        <div className={styles.socialMedia}>
          <h4 className={styles.socialMediaHeader}>GET IN TOUCH</h4>
          <div className={styles.icons}>
            <p>270, Sultanganj Road, Dhaka </p>
            <p>Contact: +8801705686655 </p>
            <p>Email: sunbeamforce@gmail.com</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={styles.socialMedia}>
          <h4 className={styles.socialMediaHeader}>QUICK LINKS</h4>
          <div className={styles.icons}>

          <Link href="/">Home</Link>
          <Link href="/photo-gallery">Products</Link>
          <Link href="/photo-gallery">Gallery</Link>
          <Link href="/photo-gallery">Videos</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/blog">Blog</Link>
 
          </div>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialMedia}>
          <h1 className={styles.socialMediaHeader}>FOLLOW US</h1>
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

      <NotSSRMaps />

      {/* Copyright and Back to Top */}
      <div className={styles.bottomBar}>
        <div className={styles.logoFooter}>
                      <button
                          className={styles.logoButton}
                          onClick={() => router.push('/')}
                      >
                          <Image
                              src={imageLocation}
                              // src="../../../public/logos/CHP-LOGO-1.png"
                              alt="Logo"
                              className={styles.logoImage}
                              priority
                              width={100}
                              height={60}
                          />
                      </button>
                  </div>
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
