"use client";
import styles from "./page.module.css";

const FormPage = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Start Your Project</h1>
      <form className={styles.form}>
        {/* Name Input */}
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className={styles.formInput}
          />
        </div>

        {/* Email Input */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className={styles.formInput}
          />
        </div>

        {/* Message Textarea */}
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project"
            className={styles.formTextarea}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
