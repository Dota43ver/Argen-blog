import React from 'react'
import styles from "./menu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import MenuPost from '../menuPost/MenuPost'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>lo mas hablado</h2>
      <h1 className={styles.title}>Mas popular</h1>
      <MenuPost withImage={false}/>
      <h2 className={styles.subtitle}>Descubri por topíco</h2>
      <h1 className={styles.title}>Categorias</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Elegido por el editor</h2>
      <h1 className={styles.title}>seleccion del editor</h1>
      <MenuPost withImage={true}/>
    </div>
  )
}

export default Menu