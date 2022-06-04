let ADD_POST='ADD-POST'
let UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'
let UPDATE_NEW_MESSAGE_BODY ='UPDATE-NEW-MESSAGE-BODY'
let SEND_MESSAGE = 'SEND-MESSAGE'

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
     
     _addPost(){
          let newPost = {
               id:5,
               message: this._state.profilePage.newPostText
          }
          this._state.profilePage.posts.push(newPost)
          this._state.profilePage.newPostText = ''
          this._callSubscriber(this._state)
     },
     _updateNewPost(newText){
          this._state.profilePage.newPostText = newText
          this._callSubscriber(this._state)
     },
     subscribe(observer){
          this._callSubscriber = observer //--- pattern observer 
     },
     getState(){
          return this._state
     },
     dispatch(action){
          if (action.type === ADD_POST){
               this._addPost()
          } else if (action.type === UPDATE_NEW_POST_TEXT){
               this._updateNewPost(action.newText)
          } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
               this._state.dialogsPage.newMessageText = action.body
               this._callSubscriber(this._state)
          } else if (action.type === SEND_MESSAGE){
               let body = this._state.dialogsPage.newMessageText
               this._state.dialogsPage.newMessageText = ''
               this._state.dialogsPage.messages.push({id:4, message:body})
               this._callSubscriber(this._state)
          }

     } 
}

export const addPostActionCreator = () => ({type:ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
     ({type:UPDATE_NEW_POST_TEXT,newText: text})

export const sendMessageCreator = () => ({type:SEND_MESSAGE})

export const updateNewBodyMessageBodyCreator = (text) => 
     ({type:UPDATE_NEW_MESSAGE_BODY, body:text})

export default store
window.store = store