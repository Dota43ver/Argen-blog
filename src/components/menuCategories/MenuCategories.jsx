import Link from 'next/link'
import React from 'react'
import styles from "./menuCategories.module.css"

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=anime" className={`${styles.categoryItem} ${styles.anime}`}>Anime</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.deportes}`}>Deportes</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.comida}`}>Comida</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.viajes}`}>Viajes</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.general}`}>General</Link>
        <Link href="/blog" className={`${styles.categoryItem} ${styles.coding}`}>Coding</Link>
      </div>
  )
}

export default MenuCategories