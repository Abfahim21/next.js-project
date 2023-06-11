import Image from 'next/image'
import styles from './page.module.css'
import heroImage from 'public/hero.png'
import Button from '@/components/button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for your Digital Product</h1>
        <p className={styles.desc}>Turning your ideas into reality. We bring together the teams for the global tech industries.</p>
        <Button url='/portfolio' text='See Our Works'/>
      </div>
      <div className={styles.item}>
        <Image src={heroImage} alt='Hero Image' className={styles.img}/>
      </div>
    </div>
  )
}
