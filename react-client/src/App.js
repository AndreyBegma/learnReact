import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

const App = (props) => {

  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
            <Routes>
              <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
              <Route path="/profile" element={<Profile 
                postsData={props.postsData} addPost={props.addPost} 
                newPostText={props.newPostText} updateNewPost={props.updateNewPost}
              />}/>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App