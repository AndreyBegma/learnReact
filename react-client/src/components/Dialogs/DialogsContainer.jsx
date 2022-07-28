import React from "react";
import { updateNewBodyMessageBodyCreator, sendMessageCreator } from "../../redux/dialogReducer";
import StoreContex from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
     return(
          <StoreContex.Consumer>
               {
               (store) => {
               let state = store.getState().dialogsPage
               let onNewMessageChange = (body) => {
                    store.dispatch(updateNewBodyMessageBodyCreator(body))
               }
               let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
               }
               return (<Dialogs
                    updateNewBodyMessageBody = {onNewMessageChange}
                    sendMessage = {onSendMessageClick}
                    dialogsPage = {state}
               />)
               }
          }
          </StoreContex.Consumer>
     )
}

export default DialogsContainer