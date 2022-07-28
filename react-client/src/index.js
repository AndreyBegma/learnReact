import reportWebVitals from './reportWebVitals';
import React from "react"
import ReactDOM from "react-dom/client"

import './index.css'

import App from './App'


import store from './redux/redux-store';
import {Provider} from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'))

export let reRednderEntireTree = (state) => {     
     root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>  
     ) 
}

reRednderEntireTree(store.getState()) 

store.subscribe(() => {
  let state = store.getState()
  console.log(store.getState())
  reRednderEntireTree(state)
})

reportWebVitals();
