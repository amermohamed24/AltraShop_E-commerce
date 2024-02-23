import React from 'react'
import styles from './Logo.module.css'
import Link from 'next/link'
export default function Logo() {
  return (
    <div className={styles.logo}><Link href={"/"}>AltraShop</Link></div>
  )
}
