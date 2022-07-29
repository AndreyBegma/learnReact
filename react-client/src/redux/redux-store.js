import {combineReducers, createStore} from 'redux'
import {dialogsReducer} from './dialogReducer'
import {profileReducer} from './profileReducer'
import {sidebarReducer} from './sidebarReducer'



let reducers = combineReducers({
     profilePage:profileReducer,
     dialogsPage:dialogsReducer,
     sidebar:sidebarReducer
})

let store = createStore(reducers)

window.store = store

export default store 