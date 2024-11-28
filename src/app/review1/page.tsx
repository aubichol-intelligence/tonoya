"use client";
import React, { useRef } from "react";
import styles from "./page.module.css";

const ClientReview = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
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
      note: "This service has revolutionized our workflow!",
      clientImage: "/client1.jpg",
      clientLogo: "/logos/aklom.png", 
    },
    {
      id: 2,
      note: "Amazing experience and fantastic support! Amazing experience and fantastic support! Amazing experience and fantastic support! Amazing experience and fantastic support!",
      clientImage: "/client2.jpg",
      clientLogo: "/logos/CHP-LOGO-1.png",
    },
    {
      id: 3,
      note: "Highly recommend for any business looking to scale!",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/jica.png",
    },

    {
      id: 4,
      note: "This service has revolutionized our workflow!",
      clientImage: "/client1.jpg",
      clientLogo: "/logos/creato.png"
    },
    {
      id: 5,
      note: "Amazing experience and fantastic support!mn jhyhfg agsfff sffsdds dsdshh gdshghgh gdds gdsggg dsfd svvcv bxcnsvhcd gshg c",
      clientImage: "/client2.jpg",
      clientLogo: "/logos/cu.png",
    },
    {
      id: 6,
      note: "Highly recommend for any business looking to scale!",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/lged.png",
    },
    {
      id: 7,
      note: "Highly recommend for any business looking to scale!",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/shorupkathi.png",
    },
    {
      id: 8,
      note: "Highly recommend for any business looking to scale!",
      clientImage: "/client3.jpg",
      clientLogo: "/logos/upazilla-porishod.png", 
    },
  ];

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default ClientReview;
