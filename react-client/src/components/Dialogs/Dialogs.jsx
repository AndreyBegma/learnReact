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
     let dialogsData = [
          {id:1, name:'Andrey'},
          {id:2, name:'Dima'}
     ]
     let messagesData = [
          {id:1,text:'hey'},
          {id:2,text:'WTF?!'}
     ]
     return(
          <div className={styles.dialogs}>
               <div className={styles.dialogs_item}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name="Dima" id="2"/>
               </div>
               <div className={styles.messages}>
                    <Message message={messagesData[0].text}/>
                    <Message message={messagesData[1].text}/>
               </div>
          </div>
     )
}

export default Dialogs