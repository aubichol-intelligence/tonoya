"use client"

import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import imageLocation from '../../../public/logos/tonoya.png';
// import { useAuth } from '@/app/context/AuthContext';
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';

const Header = () => {
    const router = useRouter();
    const pathname = usePathname(); // Get the current path
    // const { logout } = useAuth();

    // const token = req.cookies.get("authToken")?.value;
    // const token = typeof window !== 'undefined'
    //     ? document.cookie
    //         .split('; ')
    //         .find((row) => row.startsWith('auth_token='))
    //         ?.split('=')[1]
    //     : null;
    // const isAuthenticated = Boolean(req.cookies.get("auth_token"));

    const [isOpen, setIsOpen] = useState(false);

    // const isAdmin = true; // Replace with actual logic to determine if the user is an admin
    // const isSuperAdmin = true; // Replace with actual logic to determine if the user is a super admin

    const toggle = () => setIsOpen(!isOpen);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolling(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // const handleLogOut = () => {
    //     // Perform logout logic
    //     console.log('User logged out');
    // };

    return (
        <div className={`${styles.header} ${scrolling ? styles.scrolling : ""}`}>
            <div className={styles.container}>
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

                    <div className={styles.mobileMenu}>
                        <button onClick={toggle}>
                            {isOpen ? <FaTimes className={styles.icon} /> : <FaBars className={styles.icon} />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className={styles.mobileNav}>
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
                        href="/blog"
                        className={pathname === '/blog' || pathname?.startsWith('/blog/') ? styles.active : ''}
                    // className={pathname?.startsWith('/blog') ? styles.active : ''}
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

                    {/* {
                        token &&
                        <button className={styles.logoutButton} onClick={logout}>
                            Log Out
                        </button>
                    } */}
                </div>
            )}
        </div>
    );
};
export default Header;