import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./menuPost.module.css"

const getData = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/mostPopular`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const MenuPost = async ({withImage}) => {
  const response = await getData();
  const data = response.posts;
  return (
    <div className={styles.items}>
      {
        data?.map((item)=>(

          <Link href={`/posts/${item.slug}`} className={styles.item}>
        {withImage && (<div className={styles.imageContainer}>
          <Image src={item.img} alt='something' fill className={styles.image} />
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles[item.catSlug]}`}>{item.catSlug}</span>
          <h3 className={styles.postTitle}>{item.title}</h3>
          <div className={styles.detail}>
            <span className={styles.username}>{item.userEmail}</span>
            <span className={styles.date}> - {item.createdAt.substring(0, 10)}</span>
          </div>
        </div>
        </Link>
          ))
        }
      </div>
  )
}

export default MenuPost