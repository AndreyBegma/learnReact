let UPDATE_NEW_MESSAGE_BODY ='UPDATE-NEW-MESSAGE-BODY'
let SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
     dialogs:[
          {id:1, name:'Andrey'},
          {id:2, name:'Maks'}
     ],
     messages: [
          {id:1, message: 'hi!'},
          {id:2, message: 'what are you doing?'}
     ],
     newMessageText:''
}

let updateNewMessageBody = (state, body) => {
     let copyState = {...state}
     copyState.newMessageText = body
     return copyState 
    //this._callSubscriber(this._state)
}
let sendMessage = (state) => {
     let body = {
          id: state.messages.length + 1,
          text:state.newMessageText}
     let copyState = {
          ...state,
          messages: [...state.messages,{id:body.id, message:body.text}]}
     copyState.newMessageText = ''
     return copyState
}

export const dialogsReducer = (state = initialState, action) => {
     if (action.type === UPDATE_NEW_MESSAGE_BODY){
          return(updateNewMessageBody(state,action.body))
     } else if (action.type === SEND_MESSAGE){
          return(sendMessage(state))
     } else {
          return state
     }
}

export const sendMessageCreator = () => ({type:SEND_MESSAGE})

export const updateNewBodyMessageBodyCreator = (text) => 
     ({type:UPDATE_NEW_MESSAGE_BODY, body:text})
