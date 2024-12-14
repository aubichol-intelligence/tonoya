import React from "react";
import styles from './page.module.css';
import Link from "next/link";
import { GrGallery } from "react-icons/gr";

/*
const photos = [
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
  'https://i.ibb.co.com/kQp20Sx/hand-holding-phone-close-up.jpg',
];
*/

const images = [
  { src: "https://i.ibb.co.com/6wNwM5D/Whats-App-Image-2024-11-17-at-7-29-58-PM.jpg", title: "Tonoya Vending Machine" },
  { src: "https://i.ibb.co.com/9N3LtmV/Whats-App-Image-2024-11-17-at-7-30-01-PM.jpg", title: "Tonoya Vending Machine" },
  { src: "https://i.ibb.co.com/DK2wbJ5/Whats-App-Image-2024-11-17-at-7-29-56-PM.jpg", title: "Tonoya Vending Machine" },
  { src: "https://i.ibb.co.com/8MgfNkw/Whats-App-Image-2024-11-17-at-7-29-50-PM.jpg", title: "Tonoya Vending Machine" },
  { src: "https://i.ibb.co.com/p0nQgbG/Whats-App-Image-2024-11-17-at-7-29-42-PM.jpg", title: "Tonoya Vending Machine" },
  { src: "https://i.ibb.co.com/Dtc1MWX/Whats-App-Image-2024-11-17-at-7-29-58-PM-1.jpg", title: "Tonoya Vending Machine" },
];

const PhotoGallery = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.headerText}>See Our Moments of Success</h2>

      <div className={styles.gallery}>
        {images.map((photo, index) => (
          <div key={index} className={styles.photoWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo.src} alt={`Photo ${index + 1}`} className={styles.photo} />
          </div>
        ))}
      </div>

      <Link
        href="/photo-gallery"
        className={styles.galleryButton}
      >
        Go to Gallery
        <GrGallery />
      </Link>
    </div>
  );
};

export default PhotoGallery;