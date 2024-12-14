"use client";
import React, { useState } from 'react';
import styles from './page.module.css';

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const videos = [
    { id: 1,  thumbnail: 'https://via.placeholder.com/300x170', url: 'https://tonoyabd.com/api/v1/video/read/675d31bac42d118498ec378c' },
    { id: 2,  thumbnail: 'https://via.placeholder.com/300x170', url: 'https://tonoyabd.com/api/v1/video/read/675d31afc42d118498ec378b' },
    { id: 3,  thumbnail: 'https://via.placeholder.com/300x170', url: 'https://tonoyabd.com/api/v1/video/read/675d3187c42d118498ec3787' },
    { id: 4,  thumbnail: 'https://via.placeholder.com/300x170', url: 'https://tonoyabd.com/api/v1/video/read/675d31a8c42d118498ec3789' },
    { id: 5,  thumbnail: 'https://via.placeholder.com/300x170', url: 'https://tonoyabd.com/api/v1/video/read/675d318cc42d118498ec3788' },
    { id: 6,  thumbnail: 'https://via.placeholder.com/300x170', url: 'https://tonoyabd.com/api/v1/video/read/675d317ec42d118498ec3785' },
  ];

  const openModal = (videoUrl :any) => {
    setCurrentVideo(videoUrl);
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
        {videos.map((video) => (
          <div key={video.id} className={styles.card}>
           <img src={video.thumbnail}></img>
            <div className={styles.overlay}>
              <div className={styles.thumbnailText}>
              
              <button onClick={() => openModal(video.url)} className={styles.playButton}>
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
