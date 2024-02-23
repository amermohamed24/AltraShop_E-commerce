import Counter from "@/componants/elements/Counter/Counter"
import styles from "./page.module.css"
import Image from 'next/image'



async function getData(id)
{
  const response =await fetch(`https://dummyjson.com/products/${id}`)
  return response.json()
}

export async function generateMetadata({params}){
    const product=await getData(params.id)
    return{
      title:product.title,
      description:product.description
    }
}


export default async function Post({params}) {

  const product=await getData(params.id)
  const product_images = product.images
  return (
    <div className={styles.container}>
      <div className={styles.product}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.description}</p>
        <Image className={styles.image} src={product.thumbnail} width={700} height={300} alt='' />
        <div className={styles.imageContainer}>
        {
          product_images.map((img,index)=>
            <Image className={styles.image} src={img} width={100} height={100} key={product[index]} alt='' />
          )
        }
        </div>
        <p className={styles.desc}>Price: {product.price}$</p>
        <p className={styles.desc}>DiscountPercentage: {product.discountPercentage}$</p>
        <p className={styles.desc}>Rating: {product.rating}</p>
        <p className={styles.desc}>stock: {product.stock}</p>
        <p className={styles.desc}>brand: {product.brand}</p>
        <p className={styles.desc}>category: {product.category}</p>
        <Counter />
      </div>
      
    </div>
  )
}