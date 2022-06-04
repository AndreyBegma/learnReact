import React from "react";

import styles from './Dialogs.module.css'

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewBodyMessageBodyCreator, sendMessageCreator } from "../../redux/dialogReducer";

const Dialogs = (props) => {
     
     let dialogsGenereted = props.state.dialogs.map((infoChat) => {
          return <DialogItem key={infoChat.id} name={infoChat.name} id={infoChat.id}/>
     })
     

     let messagesGenereted = props.state.messages.map((messageInfo) => {
          return <Message key={messageInfo.id} message={messageInfo.message}/>
     })

     let newMesageBody = props.state.newMessageText

     let onNewMessageChange = (event) => {
          props.dispatch(updateNewBodyMessageBodyCreator(event.target.value))
     }

     let onSendMessageClick = () => {
          props.dispatch(sendMessageCreator())
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