"use client"
import Image from "next/image";
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Home() {
  return (
    <HelmetProvider>
        <Helmet>
          <title>Our valuable clients</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <h1>Hello World</h1>
    </HelmetProvider>
  );
}
