"use client";
import { motion } from "framer-motion";
import styles from "./page.module.css";

const ContactForm = () => {
  // Variants for container animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2, // Stagger child animations
      },
    },
  };

  // Variants for individual items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
  };

  return (
    <motion.div
      className={styles.contactContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Form Section */}
      <motion.div
        className={styles.formSection}
        variants={itemVariants}
        whileHover="hover"
      >
        
        <form className={styles.form}>
          <label htmlFor="name">Name</label>
          <motion.input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className={styles.styledTextarea}
            whileFocus={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
          />
          <label htmlFor="email">Email</label>
          <motion.input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className={styles.styledTextarea}
            whileFocus={{ scale: 1.03, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
          />
          <div className={styles.inputContainer}>
            <label htmlFor="message" className={styles.dynamicLabel}>
              Your Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              className={styles.styledTextarea}
              placeholder=" "
              whileFocus={{
                borderColor: "#3498db",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            ></motion.textarea>
          </div>
          <motion.button 
            className={styles.button}
            classnametype="submit"
            whileHover={{ scale: 1.1 }}>
            Submit
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className={styles.contactInfoSection}
        variants={itemVariants}
      >
        <motion.div
          className={styles.contactBox}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
        >
          <h3>Give us a quick call</h3>
          <p>+1 (555) 123-4567</p>
        </motion.div>
        <motion.div
          className={styles.contactBox}
          whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
        >
          <h3>Send us an email to start with</h3>
          <p>contact@example.com</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
