import React from 'react'
import Link from 'next/link'
import styles from './button.module.css'

const Button = ({text, link}) => {
  return (
      <Link href={link} className={styles.button}>
        {text}
      </Link>
  );
}

export default Button
