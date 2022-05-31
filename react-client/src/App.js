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
              <Route path="/dialogs/*" element={
                <Dialogs
                  state={props.state.dialogsPage}
                />}
              />
              <Route path="/profile" element={
                <Profile 
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
                />}
              />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App