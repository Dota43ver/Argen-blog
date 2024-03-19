import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPost.module.css"

const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='something' fill className={styles.image} />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.viajes}`}>Viajes</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 27.09.2023</span>
          </div>
        </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='something' fill className={styles.image} />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.general}`}>General</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 27.09.2023</span>
          </div>
        </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='something' fill className={styles.image} />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.comida}`}>Comida</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 27.09.2023</span>
          </div>
        </div>
        </Link>
        <Link href="/" className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='something' fill className={styles.image} />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.deportes}`}>Deportes</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 27.09.2023</span>
          </div>
        </div>
        </Link>
      </div>
  )
}

export default MenuPost