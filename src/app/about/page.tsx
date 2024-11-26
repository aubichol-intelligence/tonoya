import Image from "next/image";
import styles from "./page.module.css";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>About Us</h1>
      </header>

      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Our Story</h2>
          <p className={styles.text}>
            Atelier Design is dedicated to delivering creative and innovative design solutions tailored to meet the unique needs of our clients. With years of experience and a passion for excellence, we turn ideas into reality.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg"
            alt="Our Team"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>

        <div className="imageWrapper">
          <Image src="https://i.ibb.co.com/2Pk0FsK/Wedding-Picture-Print.jpg" alt="Example" width={600}
            height={400}
          />

        </div>

      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Our Philosophy</h2>
          <p className={styles.text}>
            We believe in the power of collaboration and the importance of understanding our clients visions. Every project is a partnership, and our mission is to create designs that inspire and resonate.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
