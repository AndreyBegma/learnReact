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

const Message = (props) => {
     
     return(
          <div className={styles.message}>
               {props.message}
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
                    <Message message="hey!"/>
                    <Message message="WTF?!"/>
               </div>
          </div>
     )
}

export default Dialogs