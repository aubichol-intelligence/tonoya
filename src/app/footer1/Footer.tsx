// Footer.tsx
'use client';

import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styles from "./page.module.css";
import Image from "next/image";

// // Extend Leaflet's Default Icon type using module augmentation
// declare module "leaflet" {
//   interface IconDefault {
//     _getIconUrl?: () => string;
//   }
// }

// Safely delete the _getIconUrl property
delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Footer = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set isClient to true when the component mounts (client-side only)
        setIsClient(true);
    }, []);

    const handleBackToTop = () => {
        if (isClient && typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

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
                {/* Logo and Links */}
                <div className={styles.top}>
                    <Image src="/logo.png" alt="Company Logo" className={styles.logo} />
                    <div className={styles.links}>
                        <a href="#services">Services</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <a href="#careers">Careers</a>
                    </div>
                </div>

                {/* Map and Contact Information */}
                <div className={styles.content}>
                    {/* Your map code can go here */}

                    <div className={styles.info}>
                        <h4>Contact Us</h4>
                        <p>
                            Address: 123 Main Street, Your City, 12345
                            <br />
                            Phone: +123456789
                            <br />
                            Email: contact@yourwebsite.com
                        </p>
                        <div className={styles.social}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className={styles.bottom}>
                    <p>&copy; 2024 Sunbeam Force Limited. All Rights Reserved.</p>
                    <p>Developed by Aubichol</p>
                </div>
            </div>

            {/* Back to Top Button */}
            <button className={styles.backToTop} onClick={handleBackToTop}>
                ↑ Back to Top
            </button>
        </footer>
    );
};

export default Footer;
