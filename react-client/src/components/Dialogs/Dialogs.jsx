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

     let dialogsGenereted = dialogsData.map((infoChat) => {
          return <DialogItem name={infoChat.name} id={infoChat.id}/>
     })
     
     let messagesData = [
          {id:1,text:'hey'},
          {id:2,text:'WTF?!'}
     ]

     let messagesGenereted = messagesData.map((messageInfo) => { 
          return <Message message={messageInfo.text}/>
     })

     return(
          <div className={styles.dialogs}>
               <div className={styles.dialogs_item}>
                   {dialogsGenereted}
               </div>
               <div className={styles.messages}>
                    {messagesGenereted}
               </div>
          </div>
     )
}

export default Dialogs