"use client"

import { useState }  from 'react'
import styles from "./authLinks.module.css"
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'



const AuthLinks = () => {
  const [open, setOpen] = useState(false)
  const {status} = useSession()
  return (
    <>
    {status === "unauthenticated" ? (<Link href="/login" className={styles.link}>Loguear</Link>) : (
    <>
    <Link href="/write" className={styles.link}>Postear</Link>
    <span className={styles.link} onClick={signOut}>Desloguear</span>
    </>
    )}

    <div className={styles.burger} onClick={() => setOpen(!open)}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
    {open && (
      <div className={styles.responsiveMenu}>
        <Link href="/">Inicio</Link>
        <Link href="/">Contacto</Link>
        {status === "unauthenticated" ? (<Link href="/login">Loguear</Link>) : (<>
    <Link href="/write">Postear</Link>
    <span className={styles.link} onClick={signOut}>Desloguear</span>
    </>
    )}
      </div>
    )}
    </>
    )  
}

export default AuthLinks