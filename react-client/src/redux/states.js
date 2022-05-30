import {reRednderEntireTree} from "../render"

let state = {
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

}

export let addPost = () => {
     let newPost = {
          id:5,
          postText: state.newPostText
     }
     state.postsData.push(newPost)
     reRednderEntireTree(state)
}

export let updateNewPost = (newText) => {
     state.newPostText = newText
     reRednderEntireTree(state)
}

export default state