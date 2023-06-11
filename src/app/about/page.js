import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
      <Image src="/pexels.jpg" fill={true} alt='pexels' className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.imgTitle}>Digital Story tellers</h1>
        <h2 className={styles.imgDesc}>Handcrafting award winning...</h2>
      </div>
    </div>
    
  )
}

export default About