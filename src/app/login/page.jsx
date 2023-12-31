import styles from "./loginPage.module.css"
import React from 'react'

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>Sign in with Google</div>
            <div className={styles.socialButton}>Sign in with Github</div>
            <div className={styles.socialButton}>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage