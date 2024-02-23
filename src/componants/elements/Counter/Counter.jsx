"use client"
import React, { useState } from 'react'
import styles from './Counter.module.css'
import Link from 'next/link'

export default function Counter() {
const [count,setCount]=useState(0)
  return (
    <div>
        <div className={styles.counter}>
            <button className={styles.counter_Btn} onClick={()=>{
                if (count > 0){setCount(count - 1)}
            }}>-</button>
            <span>{count}</span>
            <button className={styles.counter_Btn} onClick={()=>{setCount(count + 1)}}>+</button>
        </div>
        <div>
            <button  className={styles.btn}><Link href={'/'}>Order {count } Now</Link></button>
        </div>
    </div>
  )
}
