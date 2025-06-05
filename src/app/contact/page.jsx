import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="/homebanner.jpg"
          alt="Contact Us"
          width={440}
          height={226}
          priority
        />
      </div>
      <div className={styles.formContainer}>
        <h2>Contact Us</h2>
        <form className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact
