import Image from 'next/image'
import styles from './page.module.css'
import heroImage from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for your Digital Product.</h1>
        <p className={styles.desc}>Turning your ideas into reality. We bring together the teams for the global tech industries.</p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={heroImage} alt='Hero Image' className={styles.img}/>
      </div>
    </div>
  )
}
