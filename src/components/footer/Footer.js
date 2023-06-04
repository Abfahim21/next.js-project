import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Abrar Fahim @ all rights reserved - 2023</div>
      <div className={styles.social}>
        <Image src="/1.png" className={styles.icon} width={20} height={20} alt='Abrar Fahim Facebook'/>
        <Image src="/2.png" className={styles.icon} width={20} height={20} alt='Abrar Fahim Instagram'/>
        <Image src="/3.png" className={styles.icon} width={20} height={20} alt='Abrar Fahim'/>
        <Image src="/4.png" className={styles.icon} width={20} height={20} alt='Abrar Fahim'/>
      </div>
    </div>
  )
}

export default Footer