import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}></h1>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Image src='/contact.png' fill={true} alt='' className={styles.img}/>
          </div>
          <form className={styles.form}>
            <input type="text" placeholder='Name' className={styles.input}/>
            <input type="email" placeholder='E-mail' className={styles.input}/>
            <textarea placeholder='message' className={styles.textArea}></textarea>
          </form>
          <Button url='#' text='Send'/>

        </div>
      </div>
      
    </div>
  )
}

export default Contact