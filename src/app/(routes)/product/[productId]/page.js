"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import styles from './prodDetail.module.css'

const ProductDetail = (props) => {
    const {productId} = props.params
    const [prodDetail, setProdDetail] = useState({})

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${productId}`)
        .then(res => setProdDetail(res.data))
        .catch(err => console.log(err))
    },[])

    return <div className={styles.container}>
        {/* <h1>{productId}</h1> */}
        <div className={styles.landingThumbnail}>
            <img src={prodDetail.thumbnail}/>
        </div>
        {/* <div className={styles.smallImg}>
            {
                prodDetail.images.map(image=><img src={image}/>)
            }
        </div> */}
        <div className={styles.content}>
            <h2>{prodDetail.title}</h2>
            <p>
                {prodDetail.description}
            </p>
            <p>
                   Price: <span className={styles.oldPrice}>{Math.floor((prodDetail.price * 100)/(100 - prodDetail.discountPercentage))}</span> {prodDetail.price}
            </p>
            <p>
                Discount: {prodDetail.discountPercentage}
            </p>
            <p>
                Rating: {prodDetail.rating}
            </p>
        </div>
    </div>
}
export default ProductDetail

// when 10% discount be prize 495 aara h to original price ?
// x - x/10 = 495                  let original price = x
// 10x - x = 4950
// x = 4950/9 = 550

// if discount price 15.6%
// x - x * 15.6/100 = 120
// 100x - 15.6x = 120 * 100

// price before discount = (price * 100) / (100 - dis%)