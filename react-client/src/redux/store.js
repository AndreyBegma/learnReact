import {dialogsReducer} from './dialogReducer'
import {profileReducer} from './profileReducer'
import {sidebarReducer} from './sidebarReducer'

let store = {
     _state:{
          profilePage:{
               posts: [
                    {id:1, message:'Hi, how are you?'},
                    {id:2, message:'It is my first post'}
               ],
               newPostText:'Write new post'
          },
          dialogsPage:{
               dialogs:[
                    {id:1, name:'Andrey'},
                    {id:2, name:'Maks'}
               ],
               messages: [
                    {id:1, message: 'hi!'},
                    {id:2, message: 'what are you doing?'}
               ],
               newMessageText:''
          },
          sidebar:''
     },
     _callSubscriber(){
          console.log("state changed")
     },
     subscribe(observer){
          this._callSubscriber = observer //--- pattern observer 
     },
     getState(){
          return this._state
     },
     dispatch(action){
          this._state.profilePage = profileReducer(this._state.profilePage, action)
          this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
          this._callSubscriber(this._state)
          /*dialogsReducer(this._state.dialogsPage, action)
          if (action.type === ADD_POST){
               this._addPost()
          } else if (action.type === UPDATE_NEW_POST_TEXT){
               this._updateNewPost(action.newText)
          } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
               this._updateNewMessageBody(action.body)
          } else if (action.type === SEND_MESSAGE){
               this._sendMessage()
          }*/
          
     } 
}

export default store
window.store = store