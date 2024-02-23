import Image from "next/image";
import { icons } from "./data";
import styles from './Footer.module.css'
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>©2024 AltraShop. All Rights reserved</div>
      <div className={styles.icons}>
        {
          icons.map(icon=><Link href={icon.url}><Image 
            src={`/images/icons/${icon.src}.png`}
            width={25} 
            height={25} 
            lt={icon.alt} 
            key={icon.id}
            className={styles.icon}/>
            </Link>)
        }
      </div>
    </div>
  )
}
