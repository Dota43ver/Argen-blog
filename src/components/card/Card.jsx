import Image from "next/image"
import styles from "./card.module.css"
import React from 'react'
import Link from "next/link"

const Card = ({key,item}) => {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="something" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.detail}>
            <span className={styles.date}>27.09.2023 - </span>
            <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
            <h1>{item.title}</h1>
            </Link>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum enim labore velit eius corrupti eligendi? Quaerat perspiciatis nesciunt tenetur aut reiciendis nobis</p>
            <Link href="/" className={styles.link}>Leer mas</Link>
          </div>
    </div>
  )
}

export default Card