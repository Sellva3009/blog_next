import styles from './layout.module.css'

export default function BlogLayout({ children }) {
  return (
    <div className={styles.container}>
        <h1>Blog Layout</h1>
        {children}
    </div>
  );
}
