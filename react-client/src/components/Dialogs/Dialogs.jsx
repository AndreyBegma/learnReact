import React from "react";

import styles from './Dialogs.module.css'

import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
     let path = "/dialogs/"+props.id
     return(
     <div className={styles.dialog + ' ' + styles.active}>
          <NavLink to={path}>{props.name}</NavLink>
     </div>
     )
}

const Dialogs = (props) => {
     
     return(
          <div className={styles.dialogs}>
               <div className={styles.dialogs_item}>
                    <DialogItem name="Andrey" id="1"/>
                    <DialogItem name="Dima" id="2"/>
               </div>
               <div className={styles.messages}>
                    <div className={styles.message}>
                         Hi!
                    </div>
                    <div className={styles.message}>
                         Wtf!?
                    </div>
               </div>
          </div>
     )
}

export default Dialogs