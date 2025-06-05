import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import portfolio from "@/data";
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h2>Portfolio</h2>
      <p>This is the portfolio page.</p>
      <h3>Gallery</h3>
      <p>Check out our portfolio gallery.</p>
      <div className={styles.gallery}>
        {portfolio.map((category) => (
          <Link
            className={styles.galleryItem}
            href={`/portfolio/${category.name}`}
            key={category.id}
          >
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={200}
            />
            <div className={styles.categoryDetail}>
              <h4>{category.name}</h4>
              <p>{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio
