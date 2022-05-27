import React from "react"
import styles from './Header.module.css'

const Header = () => {
     let logoCompany = "https://thumbs.dreamstime.com/b/business-company-logo-27438246.jpg"
     return(<header className={styles.header}>
     <img className={styles.logo_img} src={logoCompany} />
   </header>)
}

export default Header