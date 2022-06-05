import reportWebVitals from './reportWebVitals';
import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'

import App from './App'


import store from './redux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'))

export let reRednderEntireTree = (state) => {     
     root.render(
    <React.StrictMode>
      <App 
        state={state}
        dispatch = {store.dispatch.bind(store)}
      />
    </React.StrictMode>
     ) 
}

reRednderEntireTree(store.getState()) 

store.subscribe(()=>{
  let state = store.getState()
  reRednderEntireTree(state)
})

reportWebVitals();
