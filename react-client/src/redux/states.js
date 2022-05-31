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
               ]
          },
          sidebar:''
     },
     _callSubscriber(){
          console.log("state changed")
     },
     getState(){
          return this._state
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
     dispatch(action){
          if (action.type === 'ADD-POST'){
               this._addPost()
          } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
               this._updateNewPost(action.newText)
          }
     } 
}


export default store
window.store = store