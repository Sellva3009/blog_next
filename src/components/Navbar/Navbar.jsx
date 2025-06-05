'use client'

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Theme from '../Theme/Theme';
import Logout from '../Logout/Logout';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();
  return (
    <div className={styles.navbarContainer}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <nav className={styles.navLinks}>
        <Theme />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/portfolio">Porfolio</Link>
        {session.status === "authenticated" && <Link href="/profile">Profile</Link>}
        {session.status === "unauthenticated" && (
          <Link href="/dashboard/login">Login</Link>
        )}
        {session.status === "authenticated" && <Logout />}
      </nav>
    </div>
  );
}

export default Navbar
