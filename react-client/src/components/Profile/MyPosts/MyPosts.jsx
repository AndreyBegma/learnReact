import React from "react";

import Post from "./Post/Post";

import styles from './MyPosts.module.css'


const MyPosts = (props) => {
     let postsGenereted = props.posts.map((postInfo) => {
          return <Post key={postInfo.id} className={styles.post} text={postInfo.message}/>
     })
     let newPostElement = React.createRef()

     let addPostClick = () => { 
          props.dispatch({
               type:'ADD-POST',
          })
     } 

     let onPostChange = () => {
          let text = newPostElement.current.value 
          props.dispatch({
               type:'UPDATE-NEW-POST-TEXT',
               newText:text
          })
     }

     return(
          <div>
               My posts
               <div>
                    <textarea 
                         ref={newPostElement} onChange={onPostChange} value={props.newPostText}
                    />
                    <div>
                         <button onClick = {addPostClick}>Send</button>
                    </div>
               </div>
               <div className={styles.posts}>
                    {postsGenereted}
               </div>
          </div>
     )
}

export default MyPosts