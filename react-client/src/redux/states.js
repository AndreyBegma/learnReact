let store = {
     _state:{
          newPostText:'new post text',
          postsData: [
               {id:1,postText:'hello'},
               {id:2,postText:'What are you say?'}
          ],
          dialogsData: [
               {id:1, name:'Andrey'},
               {id:2, name:'Dima'}
          ],
          messagesData: [
               {id:1,text:'hey'},
               {id:2,text:'WTF?!'}
          ]
     },
     getState(){
          return this._state
     },
     _callSubscriber(){
          console.log("state changed")
     },
     addPost(){
          let newPost = {
               id:5,
               postText: this._state.newPostText
          }
          this._state.postsData.push(newPost)
          this._state.newPostText = ''
          this._callSubscriber()
     },
     updateNewPost(newText){
          this._state.newPostText = newText
          this._callSubscriber()
     },
     subscribe(observer){
          this._callSubscriber = observer //--- pattern observer 
     }
}


export default store
window.store = store