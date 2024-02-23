'use client'
import Link from "next/link";
import styles from './Button.module.css'

export default function Button() {
  return (
    <div>
        <button className={styles.btn}onClick={()=>{
            console.log("Logout")
        }}>
            <Link href={''}>Logout</Link>
        </button>
    </div>
  )
}
