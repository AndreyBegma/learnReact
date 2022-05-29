import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

import state from './redux/states'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={state.postsData} dialogsData={state.dialogsData} messagesData={state.messagesData}/>
  </React.StrictMode>
) 

reportWebVitals();
