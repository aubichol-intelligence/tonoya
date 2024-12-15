"use client";

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';

interface Item {
  // id: string;
  video_id: string;
  file_name: string;
  tags: string[];
  thumbnail: string;
  slug: string;
  title: string;
}

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const [items, setItems] = useState<Item[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [currentPage, setCurrentPage] = useState<number>(0); // Pagination state
  // const [totalItems, setTotalItems] = useState<number>(0);
  // const [thumbnails, setThumbnails] = useState<Record<string, string>>({});
  // console.log(items);
  const ITEMS_PER_PAGE = 6;


  useEffect(() => {
    const fetchItems = async () => {
      // setLoading(true);
      try {
        // const skip = currentPage * ITEMS_PER_PAGE; // Calculate skip based on the current page
        const response = await fetch(
          // `https://tonoyabd.com/api/v1/video/list/${skip}/${ITEMS_PER_PAGE}`
          `https://tonoyabd.com/api/v1/video/list/0/${ITEMS_PER_PAGE}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        // console.log(data);
        setItems(data?.list || []);
        // setTotalItems(data.length || 0)
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchItems();
  }, []);
  // }, [currentPage]);


  const openModal = (videoUrl: any) => {
    setCurrentVideo(`http://tonoyabd.com/api/v1/video/read/${videoUrl}`);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h1 className={styles.headerText}>Why Organizations Choose Tonoya</h1>
        <div className={styles.grid}>
          {items.map((video, i) => (
            <div key={i} className={styles.card}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                // src={'https://via.placeholder.com/300x170'}
                src={`${video?.thumbnail}` || "https://via.placeholder.com/300x170"}
                alt='Video Thumbnail'
              />

              <div className={styles.overlay}>
                <div className={styles.thumbnailText}>
                  <button onClick={() => openModal(video.video_id)} className={styles.playButton}>
                    ▶
                  </button>
                  <h3>Watch the video</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <button className={styles.closeButton} onClick={closeModal}>
                ✖
              </button>
              <video src={currentVideo} controls autoPlay className={styles.videoPlayer}></video>
            </div>
          </div>
        )}
      </div>
    </div>


  );
};

export default Videos;
