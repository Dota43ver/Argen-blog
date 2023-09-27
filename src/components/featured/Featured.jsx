import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hola soy Facundo Aguero</b> y este es un blog para practicar mis tech skills
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="something" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur</h1>
        <p className={styles.postDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus assumenda sed recusandae animi! Maxime eum iusto molestiae cupiditate sint quod ducimus ut eligendi cum voluptates exercitationem, odit incidunt ipsa eveniet.
        </p>
        <button className={styles.button}>Leer mas</button>
      </div>
      </div>
    </div>
  )
}

export default Featured