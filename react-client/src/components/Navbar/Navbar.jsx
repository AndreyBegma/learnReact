import React from "react"
import classes from'./Navbar.module.css'

const Navbar = () => {
     return(<nav className={classes.nav}>
      <div className={`${classes.item} ${classes.active}`}>
       <a href="/profile">Profile</a>
      </div>
      <div className={classes.item}>
        <a href="/dialogs">Dialogs</a>
      </div>
     <div className={classes.item}>News</div>
     <div className={classes.item}>Music</div>
     <div className={classes.item}>Settings</div>
   </nav>)
}
export default Navbar