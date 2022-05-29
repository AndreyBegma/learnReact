import React from "react";

import styles from './Dialogs.module.css'

import { NavLink } from "react-router-dom";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
     
     let dialogsGenereted = props.dialogsData.map((infoChat) => {
          return <DialogItem key={infoChat.id} name={infoChat.name} id={infoChat.id}/>
     })
     

     let messagesGenereted = props.messagesData.map((messageInfo) => {
          return <Message key={messageInfo.id} message={messageInfo.text}/>
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