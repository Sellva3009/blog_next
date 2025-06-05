import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import portfolio from '@/data'

const CategoryPage = ({ params }) => {
  const { category } = params

  const categoryData = portfolio.find((item) => item.name === category)

  if (!categoryData) {
    return <div>Category not found</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.categoryHeader}>
        <Image
          src={categoryData.image}
          alt={categoryData.name}
          width={300}
          height={200}
        />
        <h1>{categoryData.name}</h1>
        <p>{categoryData.description}</p>
      </div>

      <div className={styles.itemsGrid}>
        {categoryData.items.map((item) => (
          <div key={item.id} className={styles.itemCard}>
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
            />
            <div className={styles.itemContent}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className={styles.technologies}>
                {item.technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
