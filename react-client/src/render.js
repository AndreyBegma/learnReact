import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'

import App from './App'
import { addPost } from "./redux/states"

export let reRednderEntireTree = (state) => {
     const root = ReactDOM.createRoot(document.getElementById('root'))
     root.render(
    <React.StrictMode>
      <App addPost={addPost} postsData={state.postsData} dialogsData={state.dialogsData} messagesData={state.messagesData}/>
    </React.StrictMode>
     ) 
}