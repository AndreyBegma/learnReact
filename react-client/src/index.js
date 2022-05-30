import reportWebVitals from './reportWebVitals';
import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'

import App from './App'
import { addPost, updateNewPost, subscribe } from "./redux/states"


import state from './redux/states';

//import {reRednderEntireTree} from './render.js'



const root = ReactDOM.createRoot(document.getElementById('root'))

export let reRednderEntireTree = () => {     
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

reRednderEntireTree(state) 

subscribe(reRednderEntireTree)

reportWebVitals();
