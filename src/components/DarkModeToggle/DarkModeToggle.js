import React from 'react'
import styles from './DarkModeToggle.module.css'
import { ImSun } from "react-icons/im";
import { LuMoon } from "react-icons/lu";

const DarkModeToggle = () => {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>D{ImSun}</div>
        <div className={styles.icon}>L{LuMoon}</div>
        <div className={styles.ball}></div>
    </div>
  )
}

export default DarkModeToggle