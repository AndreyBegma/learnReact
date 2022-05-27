import React from "react"

const Header = () => {
     let logoCompany = "https://thumbs.dreamstime.com/b/business-company-logo-27438246.jpg"
     return(<header className='header'>
     <img className="logo-img" src={logoCompany} />
   </header>)
}

export default Header