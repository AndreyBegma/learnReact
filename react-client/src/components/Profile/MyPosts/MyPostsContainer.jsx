import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import StoreContex from "../../../StoreContext";
import MyPosts from "./MyPosts";



const MyPostsContainer= (props) => {
     //let state = props.store.getState()
     return(
          <StoreContex.Consumer> 
               { 
               (store) => {
                    let state = store.getState()
                    let addPostClick = () => { 
                         store.dispatch(addPostActionCreator())
                    } 
               
                    let onPostChange = (text) => { 
                         let action = updateNewPostTextActionCreator(text)
                         store.dispatch(action)
                    }
                    return (
                    <MyPosts
                         updateNewPostText = {onPostChange}
                         addPost = {addPostClick}
                         posts = {state.profilePage.posts}
                         newPostText = {state.profilePage.newPostText}
                    /> )}
               }
          </StoreContex.Consumer>
     )
}

export default MyPostsContainer