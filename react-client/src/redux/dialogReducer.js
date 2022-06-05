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
     state.newMessageText = body
    //this._callSubscriber(this._state)
}
let sendMessage = (state) => {
     let body = state.newMessageText
     state.newMessageText = ''
     state.messages.push({id:4, message:body})
     //this._callSubscriber(this._state)
}

export const dialogsReducer = (state = initialState, action) => {
     /*switch(action.type){
          case UPDATE_NEW_MESSAGE_BODY: updateNewMessageBody(state,action.body)
          case SEND_MESSAGE: sendMessage(state)
     }*/
     if (action.type === UPDATE_NEW_MESSAGE_BODY){
          updateNewMessageBody(state,action.body)
     } else if (action.type === SEND_MESSAGE){
          sendMessage(state)
     }
     return state
}

export const sendMessageCreator = () => ({type:SEND_MESSAGE})

export const updateNewBodyMessageBodyCreator = (text) => 
     ({type:UPDATE_NEW_MESSAGE_BODY, body:text})
