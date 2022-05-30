import reportWebVitals from './reportWebVitals';
import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'

import App from './App'


import store from './redux/states';

const root = ReactDOM.createRoot(document.getElementById('root'))

export let reRednderEntireTree = () => {     
     root.render(
    <React.StrictMode>
      <App 
        addPost={store.addPost.bind(store)} postsData={store._state.postsData}
        dialogsData={store._state.dialogsData} messagesData={store._state.messagesData}
        newPostText={store._state.newPostText} updateNewPost={store.updateNewPost.bind(store)}
      />
    </React.StrictMode>
     ) 
}

reRednderEntireTree(store.getState()) 

store.subscribe(reRednderEntireTree)

reportWebVitals();
