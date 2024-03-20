import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'
import Link from "next/link";

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/onepost`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const Featured = async () => {
  const response = await getData();
  const data = response.posts[0];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hola soy Facundo Aguero</b> y este es un blog para practicar mis tech skills
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
        <Image src={data.img} alt="something" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <h1 className={styles.postTitle}>{data.title}</h1>
        <p className={styles.postDesc} dangerouslySetInnerHTML={{ __html: data.desc }} />
        <Link href={`/posts/${data.slug}`}>
        <button className={styles.button}>Leer mas</button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Featured