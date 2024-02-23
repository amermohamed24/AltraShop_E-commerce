import Image from "next/image"; 
import shopping_img from "../../public/images/shopping_online.svg"
import styles from "./page.module.css"
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header_para}>
        <h1 className={styles.title}>Your Best-stop e-commerce destination!</h1>
        <p className={styles.description}>Discover a World of endless shopping possibilities at our  online store.
            Browse,choose,and order your favorite products from comfort of your home. </p>
        <button className={styles.btn}><Link href={'/blogs'}>Shop now</Link></button>
      </div>
      <div className={styles.shopping_img}>
        <Image src={shopping_img} width={500} height={500} alt="online"/>
      </div>
    </div>
  );
}


