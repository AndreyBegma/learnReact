import React from "react";
import { updateNewBodyMessageBodyCreator, sendMessageCreator } from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
     let state = props.store.getState().dialogsPage

     let onNewMessageChange = (body) => {
          props.store.dispatch(updateNewBodyMessageBodyCreator(body))
     }

     let onSendMessageClick = () => {
          props.store.dispatch(sendMessageCreator())
     }


     return(
          <Dialogs
               updateNewBodyMessageBody = {onNewMessageChange}
               sendMessage = {onSendMessageClick}
               dialogsPage = {state}
          />
     )
}

export default DialogsContainer