import Image from "next/image"
import styles from "./page.module.css"
import Link from "next/link"


export const metadata = {
  title: {
    default:"AltraShop | Products",
    tempelete:" %s | AltraShop App"
  },
  description: "AltraShop Online",
};

async function getData()
{
  const response =await fetch("https://dummyjson.com/products")
  if(!response.ok)
  {
    throw new Erorr("failed to fetch products")
  }
  return await response.json()
}


export default async function Blogs() {
  const data=await getData()
  const products=data.products
  return (
    <div className={styles.container}>
      {
        products.map(product=>
          <div className={styles.product}>
          <div className={styles.imgProduct}>
            <Image className={styles.img}src={product.thumbnail}
              key={product.id}
              fill={true}
              alt="" 
            />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
          <button className={styles.btn} ><Link href={`blogs/${product.id}`}>Product Details</Link></button>
        </div>
      </div>
        )
      }
    </div>
  )
}
