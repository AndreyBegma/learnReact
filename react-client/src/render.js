import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'

import App from './App'
import { addPost } from "./redux/states"
import { updateNewPost } from "./redux/states"

const root = ReactDOM.createRoot(document.getElementById('root'))

export let reRednderEntireTree = (state) => {     
     root.render(
    <React.StrictMode>
      <App 
        addPost={addPost} postsData={state.postsData} dialogsData={state.dialogsData} 
        messagesData={state.messagesData} newPostText={state.newPostText}
        updateNewPost={updateNewPost}
      />
    </React.StrictMode>
     ) 
}