"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card/Card"
import styles from './page.module.css'

export default function Home() {

  const[products, setProducts] = useState([])  // empty array

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    //.then(res => console.log(res.data))
    .then(res => setProducts(res.data.products))
    .catch(err => console.log(err))
  }, [])

  return (
    <main className={styles.container}>
      {
        products.length > 0 && products.map((item, idx) => <Card product = {item} key = {idx}/>)
      }
    </main>
  )
}
