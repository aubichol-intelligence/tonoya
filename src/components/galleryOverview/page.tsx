import React from "react";
import styles from './page.module.css';

const photos = [
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
];

const PhotoGallery = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.headerText}>See our moments of success</h1>
    <div className={styles.gallery}>
      {photos.map((photo, index) => (
        <div key={index} className={styles.photoWrapper}>
          <img src={photo} alt={`Photo ${index + 1}`} className={styles.photo} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default PhotoGallery;
