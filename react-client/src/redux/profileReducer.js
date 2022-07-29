let ADD_POST='ADD-POST'
let UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT'

let initialState = {
     posts: [
          {id:1, message:'Hi, how are you?'},
          {id:2, message:'It is my first post'}
     ],
     newPostText:''
}

let addPost = (state) =>{
     let newPost = {
          id:state.posts.length + 1,
          message: state.newPostText
     }
     let copyState = {...state}
     copyState.posts = [...state.posts]
     copyState.posts.push(newPost)
     copyState.newPostText = ''
     return copyState
     //this._callSubscriber(this._state)
}
let updateNewPost = (state,newText) =>{
     let copyState = {...state}
     copyState.newPostText = newText
     return copyState
     //this._callSubscriber(this._state)
}

export const profileReducer = (state = initialState, action) => {
     switch(action.type){
          case ADD_POST:
               {return addPost(state)}
          case UPDATE_NEW_POST_TEXT: 
               {return updateNewPost(state, action.newText)}
          default: 
               {return state}
     }
}

export const addPostActionCreator = () => ({type:ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
     ({type:UPDATE_NEW_POST_TEXT,newText: text})
