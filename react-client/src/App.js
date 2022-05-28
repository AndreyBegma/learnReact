import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'

const App = () => {

  return(
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/dialogs" element={<Dialogs/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </div>
        </BrowserRouter>
        {/*<Profile/>*/}
        {/*<Dialogs/>*/}
      </div>
    </div>
  )
}


export default App