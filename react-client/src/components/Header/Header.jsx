import React from "react"
import styles from './Header.module.css'

const Header = () => {
     let logoCompany = "http://31.172.65.179:2000/img/logo-icon.png"
     return(
     <header className={styles.header}>
          <img className={styles.logo_img} src={logoCompany} />
     </header>)
}

export default Header