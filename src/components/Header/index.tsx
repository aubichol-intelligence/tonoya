"use client"

import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import imageLocation from '../../../public/logos/tonoya.png';
// import { useAuth } from '@/app/context/AuthContext';
import { FaAngleRight, FaBars, FaSearch, } from 'react-icons/fa';

const Header = () => {
    const router = useRouter();
    const pathname = usePathname(); // Get the current path

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);


    return (
        <div className={`${styles.header} ${scrolling ? styles.scrolling : ""}`}>
            {/* <div className={styles.header}> */}
            <div className={styles.container}>
                {/* <div className={styles.sideIcon} onClick={toggleDrawer}>
                    <FaAngleRight className={styles.sideIconBar} />
                </div> */}

                <div className={styles.logo}>
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

                <div className={`${styles.nav} ${styles.desktopNav}`}>
                    <Link
                        href="/"
                        className={pathname === '/' ? styles.active : ''}
                    >
                        Home
                    </Link>
                    <Link
                        href="/photo-gallery"
                        className={pathname === '/photo-gallery' ? styles.active : ''}
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/videos"
                        className={pathname === '/videos' ? styles.active : ''}
                    >
                        Videos
                    </Link>
                    <Link
                        href="/blog"
                        className={pathname === '/blog' || pathname?.startsWith('/blog/') ? styles.active : ''}
                    // className={pathname?.startsWith('/blog') ? styles.active : ''}
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/contact"
                        className={pathname === '/contact' ? styles.active : ''}
                    >
                        Contact Us
                    </Link>
                    {/* <div className={styles.dropdown}>
                        <span className={styles.dropdownToggle}>
                            Profile
                        </span>
                        <div className={styles.dropdownMenu}>
                            <a href="/profile">User Profile</a>
                            <a href="/update_password">Update Password</a>
                        </div>
                    </div> */}

                    {/* {
                        token &&
                        <button className={styles.logoutButton} onClick={logout}>
                            Log Out
                        </button>
                    } */}
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                    <button className={styles.searchButton} >
                        <FaSearch className={`${styles.icon} ${styles.searchIcon}`} />
                    </button>

                    {/* <div className={styles.mobileMenu}>
                        <button onClick={toggle}>
                            {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
                        </button>
                    </div> */}
                    <div className={styles.sideIcon} onClick={toggleDrawer}>
                        {isDrawerOpen ? "" : <FaBars className={styles.sideIconBar} />}
                    </div>
                </div>
            </div>

            {/* Backdrop overlay */}
            {/* {isDrawerOpen && (
                <div
                    className={`${styles.backdrop} ${isDrawerOpen ? styles.show : ""}`}
                    onClick={toggleDrawer}
                ></div>
            )} */}

            {/* Drawer */}
            {isDrawerOpen && (
                <>
                    {/* <div
                        className={`${styles.backdrop} ${isDrawerOpen ? styles.show : ""}`}
                        onClick={toggleDrawer}
                    ></div> */}

                    {/* // <div className={styles.drawer}> */}
                    <div className={`${styles.drawer} ${isDrawerOpen ? 'open' : 'closed'}`}>
                        <button className={styles.closeButton} onClick={toggleDrawer}>
                            <FaAngleRight />
                        </button>

                        {/* <div className={styles.mobileNav}> */}
                        <div className={styles.drawerLinks}>
                            <Link
                                href="/"
                                className={pathname === '/' ? styles.active : ''}
                                onClick={toggleDrawer}
                            >
                                Home
                            </Link>
                            <Link
                                href="/photo-gallery"
                                className={pathname === '/photo-gallery' ? styles.active : ''}
                                onClick={toggleDrawer}
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/videos"
                                className={pathname === 'videos' ? styles.active : ''}
                                onClick={toggleDrawer}
                            >
                                Videos
                            </Link>
                            <Link
                                href="/blog"
                                className={pathname === '/blog' || pathname?.startsWith('/blog/') ? styles.active : ''}
                                // className={pathname?.startsWith('/blog') ? styles.active : ''}
                                onClick={toggleDrawer}
                            >
                                Blogs
                            </Link>
                            {/* <div className={styles.dropdown}>
                        <span className={styles.dropdownToggle}>
                            Profile
                        </span>
                        <div className={styles.dropdownMenu}>
                            <a href="/profile">User Profile</a>
                            <a href="/update_password">Update Password</a>
                        </div>
                    </div> */}
                            <Link
                                href="/contact"
                                className={pathname === "/contact" ? styles.active : ""}
                                onClick={toggleDrawer}
                            >
                                Contact Us
                            </Link>
                            {/* {
                        token &&
                        <button className={styles.logoutButton} onClick={logout}>
                            Log Out
                        </button>
                    } */}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
export default Header;