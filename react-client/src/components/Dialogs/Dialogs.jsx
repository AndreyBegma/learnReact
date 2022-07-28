import React from "react";

import styles from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
     let dialogsGenereted = props.dialogsPage.dialogs.map((infoChat) => {
          return <DialogItem key={infoChat.id} name={infoChat.name} id={infoChat.id}/>
     })
     

     let messagesGenereted = props.dialogsPage.messages.map((messageInfo) => {
          return <Message key={messageInfo.id} message={messageInfo.message}/>
     })

     let newMesageBody = props.dialogsPage.newMessageText

     let onNewMessageChange = (event) => {
          let body = event.target.value
          props.updateNewBodyMessageBody(body)
     }

     let onSendMessageClick = () => {
          props.sendMessage()
     }


     return(
          <div className={styles.dialogs}>
               <div className={styles.dialogs_item}>
                   {dialogsGenereted}
               </div>
               <div className={styles.messages}>
                    <div>
                         {messagesGenereted}
                    </div>
                    <div>
                         <div>
                              <textarea 
                                   value={newMesageBody} placeholder="Enter your message"
                                   onChange={onNewMessageChange}
                              />
                         </div>
                         <div>
                              <button className={styles.btnSendMessage} onClick={onSendMessageClick}>
                                   Send
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Dialogs