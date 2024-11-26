import Image from "next/image";
import styles from "./banner.module.css";

const ResponsiveBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Our Website!</h1>
        <p className={styles.subtitle}>Discover amazing features and benefits</p>
        <button className={styles.ctaButton}>Learn More</button>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/banner.jpg" // Replace with your image path
          alt="Banner"
          layout="fill"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ResponsiveBanner;
