// "use client";

import Link from 'next/link';
import styles from './Footer.module.css';
import BackToTop from '../BackToTop';

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Quick Links */}
                    <div className={styles.section}>
                        <h3 className={styles.heading}>Quick Links</h3>
                        <ul className={styles.list}>
                            <li>
                                <Link href="/" className={styles.link}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/protected/dashboard" className={styles.link}>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className={styles.link}>
                                    Blogs
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Us */}
                    <div className={styles.section}>
                        <h3 className={styles.heading}>Contact Us</h3>
                        <p>Email: info@bdh.org</p>
                        <p>Phone: +880 1234 567890</p>
                        <p>Address: Dhaka, Bangladesh</p>
                    </div>
                    {/* Follow Us */}
                    <div className={styles.section}>
                        <h3 className={styles.heading}>Follow Us</h3>
                        <div className={styles.socialLinks}>
                            <Link href="https://www.facebook.com/isforum" className={styles.link} target="_blank">
                                Facebook
                            </Link>
                            <Link href="https://x.com/icsorum" className={styles.link} target="_blank">
                                Twitter
                            </Link>
                            <Link href="#" className={styles.link} target="_blank">
                                Instagram
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <p className={styles.copy}>&copy; 2024 Bangladesh Conflict Watch. All rights reserved.</p> */}
                <div className={styles.bottomBar}>
                    <p>
                        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                        Developed by <a href="https://developerportfolio.com">Aubichol</a>.
                    </p>
                    <BackToTop />
                </div>
            </div>
        </div>
    );
};
export default Footer;