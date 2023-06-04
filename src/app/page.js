import Image from 'next/image'
import styles from './page.module.css'
import heroImage from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1>Better Design for your Degital Products</h1>
        <p>Turning your ideas into reality. We bring together the teams for the global tech industries.</p>
        <button>See Our Works</button>
      </div>
      <div className={styles.imgContainer}>
        <Image src={heroImage}/>
      </div>
    </div>
  )
}
