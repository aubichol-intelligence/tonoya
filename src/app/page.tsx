
"use client"
import React from "react";
import styles from "./page.module.css";
//import Product1 from "../app/product/page";
import ProductOverview from "../app/productOverview/page";
import Speciality from "../app/work5/page";
import Institution from "../app/carousal2/page";
import ContactSummary from "../app/contactsum/page";
import Head from 'next/head';

import { NextPage } from "next";
import GalleryOverview from "../app/galleryOverview/page";
//import dynamic from 'next/dynamic';

/*
'use client';

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import SomeText from '@/lib/components/samples/SomeText';

const Home: NextPage = () => {
  const NotSSRMaps = dynamic(() => import('@/lib/components/maps'), {
    ssr: false,
  });

  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-screen-lg flex-col items-center justify-center gap-8 text-center">
      <SomeText />
      <NotSSRMaps />
    </div>
  );
};

export default Home;

*/

const Home: NextPage = () => {

  /*
  const NotSSRMaps = dynamic(() => import('../components/map/page'), {
    ssr: false,
  });
  */
  return (
    
    <div className={styles.containerOut}>
      <Head>
          <title>Tonoya&apos; Website</title>
          <meta name="description" content="The home of the largest Vending Machine producer in Bangladesh" />
          <meta name="keywords" content="tonoya, website, vending machine, women" />
          <meta property="og:title" content="Tonoya&apos; Website" />
          <meta property="og:description" content="Find Bangladesh&apos; largest Vending Machine providers" />
          <meta property="og:image" content="/logos/tonoya.png" />
          <meta name="robots" content="index, follow" />
      </Head>
      
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
            <p>We Deliver the Premium Sanitary Pad Vending Machines in Bangladesh.</p>
            <button className={styles.button}>Learn More</button>
            </div>
        </div>
        </div>

        <ProductOverview/>
        <Speciality/>
        <Institution/>
        <ContactSummary/>
        <GalleryOverview/>
       {/* <NotSSRMaps /> */}    
       
    </div>
  );
}

export default Home;