import React from "react"
import classes from'./Navbar.module.css'
import { NavLink } from "react-router-dom"

const Navbar = () => {
     return(<nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs">Dialogs</NavLink>
      </div>
     <div className={classes.item}>News</div>
     <div className={classes.item}>Music</div>
     <div className={classes.item}>Settings</div>
   </nav>)
}
export default Navbar