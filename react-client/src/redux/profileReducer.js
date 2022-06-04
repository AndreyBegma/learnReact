let ADD_POST='ADD-POST'
let UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'

let addPost = (state) =>{
     let newPost = {
          id:5,
          message: state.newPostText
     }
     state.posts.push(newPost)
     state.newPostText = ''
     //this._callSubscriber(this._state)
}
let updateNewPost = (state,newText) =>{
     state.newPostText = newText
     //this._callSubscriber(this._state)
}

export const profileReducer = (state, action) => {
     switch(action.type){
          case ADD_POST: addPost(state)
          case UPDATE_NEW_POST_TEXT: updateNewPost(state, action.newText)
          default: console.log('Error in profile reducer')
     }
     return state
}

export const addPostActionCreator = () => ({type:ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
     ({type:UPDATE_NEW_POST_TEXT,newText: text})
