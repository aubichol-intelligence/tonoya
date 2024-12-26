import React, { useEffect, useState } from "react";
import styles from './page.module.css';
// import Link from "next/link";
// import { GrGallery } from "react-icons/gr";
import { useRouter } from 'next/navigation';


// const images = [
//   { src: "https://i.ibb.co.com/6wNwM5D/Whats-App-Image-2024-11-17-at-7-29-58-PM.jpg", title: "Tonoya Vending Machine" },
//   { src: "https://i.ibb.co.com/9N3LtmV/Whats-App-Image-2024-11-17-at-7-30-01-PM.jpg", title: "Tonoya Vending Machine" },
//   { src: "https://i.ibb.co.com/DK2wbJ5/Whats-App-Image-2024-11-17-at-7-29-56-PM.jpg", title: "Tonoya Vending Machine" },
//   { src: "https://i.ibb.co.com/8MgfNkw/Whats-App-Image-2024-11-17-at-7-29-50-PM.jpg", title: "Tonoya Vending Machine" },
//   { src: "https://i.ibb.co.com/p0nQgbG/Whats-App-Image-2024-11-17-at-7-29-42-PM.jpg", title: "Tonoya Vending Machine" },
//   { src: "https://i.ibb.co.com/Dtc1MWX/Whats-App-Image-2024-11-17-at-7-29-58-PM-1.jpg", title: "Tonoya Vending Machine" },
// ];

interface ImageData {
  file_name: string;
  image_id?: string;
  slug?: string;
  alt?: string;
  title?: string;
  tags: string[];
}


const PhotoGallery = () => {

  const router = useRouter();

  const handleGalleryClick = () => {
    // Redirect to a contact page or open a modal
    // window.location.href = "/carousal2";
    router.push('/photo-gallery');
  };

  const [imagesWithData, setImagesWithData] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      // setLoading(true);
      try {
        const response = await fetch(`https://tonoyabd.com/api/v1/image/findtag`, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
            //   Authorization: process.env.API_TOKEN || '',
          },
          body: JSON.stringify({
            skip: "0",
            limit: "6",
            tags: ["main"],
          }),
        });

        if (response.ok) {
          const data = await response.json();
          // console.log(data.results);

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
        // setLoading(false);
      }
    }

    fetchImages();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.headerText}>See Our Moments of Success</h2>
      <p className={styles.secondaryText}>Relive Some of the Moments After Deployment of Our Vending Machines in Various Organizations </p>

      <div className={styles.gallery}>
        {imagesWithData.map((photo, index) => (
          <div key={index} className={styles.photoWrapper}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://tonoyabd.com/api/v1/image/read/${photo.image_id}`} alt={photo?.alt} className={styles.photo} />
          </div>
        ))}
      </div>

      {/*<Link
        href="/photo-gallery"
        className={styles.galleryButton}
      >
        Go to Gallery
        <GrGallery />
        </Link>*/}
      <div className={styles.buttonCont}>
        <button className={styles.button} onClick={handleGalleryClick}>See More</button>
      </div>
    </div>
  );
};

export default PhotoGallery;