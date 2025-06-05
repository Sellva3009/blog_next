import React from 'react'
import { auth } from '@/auth'
import styles from './page.module.css'
import Image from 'next/image'

const Profile = async () => {
  const session = await auth()

  if (!session) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h2>Please sign in to view your profile</h2>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.profileCard}>
        <div className={styles.header}>
          {/* <div className={styles.avatarContainer}>
            <Image
              src={session.user?.image || '/default-avatar.png'}
              alt={session.user?.name || 'User avatar'}
              width={120}
              height={120}
              className={styles.avatar}
            />
          </div> */}
          <h1 className={styles.name}>{session.user?.name}</h1>
          <p className={styles.email}>{session.user?.email}</p>
        </div>

        <div className={styles.details}>
          <div className={styles.section}>
            <h2>Account Information</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Name</span>
                <span className={styles.value}>{session.user?.name}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>{session.user?.email}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>Account Type</span>
                <span className={styles.value}>
                  {session.user?.email?.includes('@gmail.com') ? 'Google Account' : 'Email Account'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
