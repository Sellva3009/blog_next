import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';

const getPosts = async () => {
  try {
    // Fetch from the internal API route using a relative path.
    // Next.js should handle this correctly in Server Components.
    const res = await fetch(`/api/posts`, {
      revalidate: 60
    });
    
    if (!res.ok) {
      const errorBody = await res.text(); 
      console.error(`API Error Response (${res.status}):`, errorBody); 
      // Include response body in the error message for debugging
      throw new Error(`Failed to fetch posts: ${res.status} - ${errorBody}`);
    }

    const data = await res.json();
    console.log("Fetched data:", data);
    const result = Array.isArray(data) ? data : [];
    console.log("Returned result:", result);
    return result;
  } catch (err) {
    console.error('Error fetching posts:', err);
    return [];
  }
}

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Posts</h1>
      
      {posts.length === 0 ? (
        <div className={styles.noPosts}>
          <p>No posts available at the moment.</p>
        </div>
      ) : (
        <div className={styles.postsGrid}>
          {posts.map(post => (
            <Link 
              href={`/blog/${post._id}`} 
              key={post._id} 
              className={styles.post}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src={post.image || '/blog.jpg'} 
                  width={300} 
                  height={200} 
                  alt={post.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.description}>{post.description}</p>
                <div className={styles.meta}>
                  <span className={styles.date}>
                    {new Date(post.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default BlogPage
