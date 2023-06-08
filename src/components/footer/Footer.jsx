import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 SMC. All rights reserved.</div>
      <div >
        <div className={styles.social}>
        <Image width={15} height={15} className={styles.icon} src="/1.png" alt="SMC-Social-acounts" />
        <Image width={15} height={15} className={styles.icon} src="/2.png" alt="SMC-Social-acounts" />
        <Image width={15} height={15} className={styles.icon} src="/3.png" alt="SMC-Social-acounts" />
        <Image width={15} height={15} className={styles.icon} src="/4.png" alt="SMC-Social-acounts" />
        </div>
      </div>
    </div>
  )
}

export default Footer
