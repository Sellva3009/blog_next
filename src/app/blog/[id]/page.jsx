import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const getPosts = async (id) => {
  try {
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    return notFound();
  }
}

const BlogPost = async ({ params }) => {
  const post = await getPosts(params.id);
  return (
    <div className={styles.container}>
      <h1>Blog Post - {post?.title}</h1>
      <p>{post?.description}</p>
      <Image src={post?.image} width={1200} height={450} alt={post?.title} />
      <p>{post?.content}</p>
      <Link href='/blog' className={styles.back}>Back to Blog</Link>
    </div>
  )
}

export default BlogPost
