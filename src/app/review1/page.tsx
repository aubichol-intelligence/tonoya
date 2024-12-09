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
    }
  };


  const clientData = [
    {
      id: 1,
      name:"Tarif Ezaz",
      note: "Working with [Client's Name/Company] has been an absolute pleasure. Their clear communication, proactive approach, and commitment to excellence made the project seamless and enjoyable. [Highlight a specific positive aspect, e.g.,We look forward to collaborating on future projects!",
      clientImage: "/client1.jpg",
      clientLogo: "/logos/aklom.png", 
    },
    {
      id: 2,
      name:"Motu Sarkar",
      note: "Amazing experience and fantastic support! Amazing experience and fantastic support! Amazing experience and fantastic support! Amazing experience and fantastic support!",
      clientImage: "/client2.jpg",
      clientLogo: "/logos/CHP-LOGO-1.png",
    },
    {
      id: 3,
      name:"Ankita Sarkar",
      note: "Highly recommend for any business looking to scale!",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/jica.png",
    },

    {
      id: 4,
      name:"Ankita Sarkar chaity",
      note: "This service has revolutionized our workflow!",
      clientImage: "/client1.jpg",
      clientLogo: "/logos/creato.png"
    },
    {
      id: 5,
      name:"Onto Hin",
      note: "Amazing experience and This service has revolutionized our workflow! fantastic support! mn jhyhfg agsfff sffsdds dsdshh gdshghgh gdds gdsggg dsfd svvcv bxcnsvhcd gshg.",
      clientImage: "/client2.jpg",
      clientLogo: "/logos/cu.png",
    },
    {
      id: 6,
      name:"Dalim VHai",
      note: "Highly recommend for any business looking to scale!",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/lged.png",
    },
    {
      id: 7,
      name:"Yousuf H. Showrov",
      note: "Highly recommend for any business looking to scale!",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/shorupkathi.png",
    },
    {
      id: 8,
      name:"Trishiya Nashtaran",
      note: "Highly recommend for any business looking to scale Highly recommend for any business looking to scale.nnnHighly recommend for any business looking to.",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/upazilla-porishod.png", 
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
      <button className={styles.arrowButton} onClick={() => scroll("left")}>
        &#8592;
      </button>
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
          src="https://i.ibb.co.com/Z8cnrhJ/client.jpg"
          alt={`"client's photo"`} 
          className={styles.clientImage} 
          width={100} 
          height={100} 
        />
    </div>
      
    <div className={styles.clientHeader}>
      <h3 className={styles.clientName}>{client.name}</h3>
      <p className={styles.clientDesignation}>General Manager</p>
    </div>

    <div className={styles.reviewText}>
      <FaQuoteLeft className={styles.quoteIcon} />
      <p className={styles.clientReviewText}>
        {client.note}
      </p>
    </div>

    <div className={styles.clientFooter}>
      <h4 className={styles.clientName}>{client.name}</h4>
      <p className={styles.clientDesignation}>General Manager</p>
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
   <button className={styles.arrowButton} onClick={() => scroll("right")}>
     &#8594;
   </button>
 </div>
  
  
  );
};

export default ClientReview;
