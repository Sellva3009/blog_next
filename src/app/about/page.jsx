import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>Building the future of digital content</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Our Story</h2>
          <p>
            Founded in 2024, we set out to create a platform where writers, creators, and thinkers
            could share their ideas with the world. Our journey began with a simple mission: to make
            content creation accessible to everyone while maintaining the highest standards of quality
            and authenticity.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Mission</h2>
          <div className={styles.missionGrid}>
            <div className={styles.missionCard}>
              <h3>Empower Creators</h3>
              <p>
                We provide the tools and platform for creators to share their stories
                and reach their audience effectively.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Foster Community</h3>
              <p>
                Building a vibrant community where ideas can be shared, discussed,
                and celebrated.
              </p>
            </div>
            <div className={styles.missionCard}>
              <h3>Drive Innovation</h3>
              <p>
                Continuously improving our platform with cutting-edge technology
                and user-focused features.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Our Values</h2>
          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <h3>Authenticity</h3>
              <p>We believe in genuine content and honest communication.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Innovation</h3>
              <p>Constantly evolving and embracing new technologies.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Community</h3>
              <p>Building meaningful connections between creators and readers.</p>
            </div>
            <div className={styles.valueItem}>
              <h3>Quality</h3>
              <p>Maintaining high standards in everything we do.</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Join Our Journey</h2>
          <p>Be part of our growing community of creators and readers.</p>
          <div className={styles.buttonGroup}>
            <Button link="/register" text="Get Started" />
            <Button link="/blog" text="Read Our Blog" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
