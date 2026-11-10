import React from 'react'
import styles from './css/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.container}>
            <h1 className={styles.navh1}>The Laptops Place</h1>
            <ul className={styles.Navbar}>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
                <li>images</li>
            </ul>
    </div>
  )
}
