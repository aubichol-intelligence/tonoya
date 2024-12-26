"use client"

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
//import Image from "next/image";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";


interface ImageData {
  file_name: string;
  image_id?: string;
  slug?: string;
  alt?: string;
  title?: string;
  tags: string[];
}

const AestheticGallery = () => {
  const [imagesWithData, setImagesWithData] = useState<ImageData[]>([]);
  // console.log(imagesWithData);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const skip = currentPage * ITEMS_PER_PAGE;
        // const response = await fetch(`https://tonoyabd.com/api/v1/image/list/${skip}/${ITEMS_PER_PAGE}`, {
        //   method: 'GET',
        // });
        const response = await fetch(`https://tonoyabd.com/api/v1/image/findtag`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
            //   Authorization: process.env.API_TOKEN || '',
          },
          body: JSON.stringify({
            skip: `${skip}`,
            limit: `${ITEMS_PER_PAGE}`,
            // tags: ["blog", "main"],
            tags: ["gallery"],
          }),
        });

        if (response.ok) {
          const data = await response.json();
          // console.log(data.list);

          // setImagesWithData(data?.list || []);
          setImagesWithData(data?.results || []);
        } else {
          const errorData = await response.json();
          console.error("Error fetching images:", errorData.message || "Unknown error");
          alert(`Error: ${errorData.message || "Failed to fetch images."}`);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        alert("An unexpected error occurred while fetching images.");
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [currentPage]);

  // prev
  const handlePrevious = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // next
  const isNextDisabled = imagesWithData?.length < ITEMS_PER_PAGE || imagesWithData?.length === 0;
  const handleNext = () => {
    if (imagesWithData?.length <= ITEMS_PER_PAGE) setCurrentPage(currentPage + 1);
    // setCurrentPage(currentPage + 1);
  };


  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1 className={styles.headerText}>When Our Achievements
          Speak for Themselves
        </h1>

        {loading ? (
          <p className={styles.loading}>Loading...</p>
        ) :
          <div className={styles.gallery}>
            {imagesWithData.map((image, index) => (
              <motion.div
                className={styles.card}
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  type: "spring",
                }}
                whileHover={{ scale: 1.05 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://tonoyabd.com/api/v1/image/read/${image.image_id}`} alt={image?.alt} className={styles.image} />

                <div className={styles.overlay}>
                  <h3 className={styles.title}>{image?.title || "Tonoya Vending Machine"}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        }

        <div className={styles.paginationContainer}>
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={currentPage <= 0}
            className={styles.prevButton}
            style={{
              backgroundColor: currentPage <= 0 ? "#c7e5c3" : "#4caf50",
              color: currentPage <= 0 ? "#6b7280" : "#ffffff",
              cursor: currentPage <= 0 ? "not-allowed" : "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              if (currentPage > 0) e.currentTarget.style.backgroundColor = "#367137";
            }}
            onMouseLeave={(e) => {
              if (currentPage > 0) e.currentTarget.style.backgroundColor = "#4caf50";
            }}
          >
            {/* <FaArrowLeft /> */}
            <GrCaretPrevious />
            Previous
          </button>

          {/* Page Number */}
          <p className={styles.pageNo}>
            Page No. {currentPage + 1}
          </p>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={styles.nextButton}
            style={{
              backgroundColor: isNextDisabled ? "#c7e5c3" : "#4caf50",
              color: isNextDisabled ? "#6b7280" : "#ffffff",
              cursor: isNextDisabled ? "not-allowed" : "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              if (!isNextDisabled) e.currentTarget.style.backgroundColor = "#367137";
            }}
            onMouseLeave={(e) => {
              if (!isNextDisabled) e.currentTarget.style.backgroundColor = "#4caf50";
            }}
          >
            Next
            {/* <FaArrowRight /> */}
            <GrCaretNext />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AestheticGallery;
