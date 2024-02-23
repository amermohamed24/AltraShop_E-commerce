'use client'
import { useContext } from 'react'
import styles from './Toggle.module.css'
import { Theme_context } from '@/Context/Context_theme'


export default function Toggle_Mode() {
    const {mode,toggle}=useContext(Theme_context)
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌚</div>
        <div className={styles.switcher} style={
            mode === "light" ? {left:"2px"} : {right: "2px"}
        }/>
    </div>
  )
}
