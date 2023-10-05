"use client";
import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
import styles from "./writePage.module.css"
import React from 'react'

const WritePage = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
  return (
    <div className={styles.container}>
        <input type="text" placeholder="Titulo" />
        <div className={styles.editor}>
            <button className={styles.button}  onClick={() => setOpen(!open)}>
                <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
            {open && (
                <div className={styles.add}>
                    <button className={styles.addButton}>
                    <Image src="/image.png" alt="" width={16} height={16} />
                    </button>
                    <button className={styles.addButton}>
                    <Image src="/external.png" alt="" width={16} height={16} />
                    </button>
                    <button className={styles.addButton}>
                    <Image src="/video.png" alt="" width={16} height={16} />
                    </button>
                </div>
            )}
            <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="Cuenta tu historia..." />
        </div>
    </div>
  )
}

export default WritePage