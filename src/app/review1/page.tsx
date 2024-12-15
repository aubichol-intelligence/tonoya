"use client";
import React, { useRef } from "react";
import Image from "next/image";

import styles from "./page.module.css";
import { FaQuoteLeft } from "react-icons/fa";

const ClientReview = () => {
  const scrollRef = useRef<HTMLInputElement>(null);

  const scroll = (direction:any) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth;

      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }      
//      const { scrollLeft, clientWidth } = scrollRef.current;
    }
  };

  const clientData = [
    {
      id: 1,
      name:"Olonkarkathi Moniram Maddhomik Bidyaloy",
      designation: "Head Master",
      image: "https://i.ibb.co.com/vmZRdPz/head-master.jpg",
      note: "Most of our students are female. They face sudden problems when period happens and gets immediate help from using Tonoya vending machines",
      clientImage: "/client1.jpg",
      clientLogo: "/logos/tonoya.png", 
    },
    {
      id: 2,
      name:"Palkirhat Sher-e-Bangla Maddhomik Bidyaloy",
      designation: "Student",
      image: "https://i.ibb.co.com/CJJWKLY/student-photoaidcom-cropped.jpg",
      note: "We are very happy to use this machine. Whenever we face menstrual difficulties, we use this machine. We are all getting benefitted from it",
      clientImage: "/client2.jpg",
      clientLogo: "/logos/tonoya.png",
    },
    {
      id: 7,
      name:"Government Shorupkathi Secondary High School",
      designation: "Assistant Teacher",
      image: "https://i.ibb.co.com/LRfHKr9/lady-teacher.jpg",
      note: "Our students love this product. We don't have to worry about sending students home anymore. Our institution is getting bettre because of this product.",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/shorupkathi.png",
    },
    {
      id: 3,
      name:"Shohagdal Razzab Ali Girls High School",
      image: "https://i.ibb.co.com/RDy2DLb/sir-photoaidcom-cropped.jpg",
      note: "After the establishment of the vending machine, when the girls have menstruation, they do not go outside. This machine helps them with adequate pads at a low cost. We thank Tonoya",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/tonoya.png",
    },
  ];

  return (
   /* <div className={styles.container}>
      <button className={styles.arrowButton} onClick={() => scroll("left")}>
        &#8592;
      </button>
      <div className={styles.cardContainer} ref={scrollRef}>
        {clientData.map((client) => (
          <div className={styles.card} key={client.id}>
            <img
              src={client.clientImage}
              alt="Client"
              className={styles.clientImage}
            />
            <p className={styles.note}>{client.note}</p>
            <img
              src={client.clientLogo}
              alt="Client Logo"
              className={styles.clientLogo}
            />
          </div>
        ))}
      </div>
      <button className={styles.arrowButton} onClick={() => scroll("right")}>
        &#8594;
      </button>
    </div>*/
    <div className={styles.container}>
      

      <div><h1 className={styles.headerText}>Our Clients’ Satisfaction is Our Top Priority</h1>
      <div className={styles.buttonContainer}>
      <button className={styles.arrowButton} onClick={() => scroll("left")}>
        &#8592;
      </button>
      <button className={styles.arrowButton} onClick={() => scroll("right")}>
        &#8594;
      </button>
      </div>
      <div className={styles.cardContainer} ref={scrollRef}>
        {clientData.map((client) => (
    <div className={styles.card} key={client.id}>
   {/*  <div className={styles.card}>
     <Image 
        src={image} 
        alt={`${name}'s image`}   
        className={styles.clientImage} 
        width={100} 
        height={100} 
      />
    </div>
    */}
     {/* Green background */}
    <div className={styles.imageWrapper}>
        <Image 
          src={client.image}
          alt={`"client's photo"`} 
          className={styles.clientImage} 
          width={100} 
          height={100} 
        />
    </div>
      
    <div className={styles.clientHeader}>
      <h3 className={styles.clientName}>{client.name}</h3>
      <p className={styles.clientDesignation}>{client.designation}</p>
    </div>

    <div className={styles.reviewText}>
      <FaQuoteLeft className={styles.quoteIcon} />
      <p className={styles.clientReviewText}>
        {client.note}
      </p>
    </div>

    <div className={styles.clientFooter}>
      <h4 className={styles.clientName}>{client.name}</h4>
      <p className={styles.clientDesignation}>{client.designation}</p>
      <div className={styles.logoContainer}>
        <Image 
          src={client.clientLogo} 
          alt="Company Logo" 
          className={styles.companyLogo} 
          width={50} 
          height={50} 
        />
      </div>
    </div>
  </div>

   ))}
   </div>
   </div>
   {/*<button className={styles.arrowButton} onClick={() => scroll("right")}>
     &#8594;
   </button>*/}
 </div>
  
  
  );
};

export default ClientReview;
