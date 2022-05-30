import React from "react";

import Post from "./Post/Post";

import styles from './MyPosts.module.css'


const MyPosts = (props) => {
     let postsGenereted = props.postsData.map((postInfo) => {
          return <Post key={postInfo.id} className={styles.post} text={postInfo.postText}/>
     })
     let newPostElement = React.createRef()

     let addPostClick = () => { 
          props.addPost()
          props.updateNewPost('')
     } 

     let onPostChange = () => {
          let text = newPostElement.current.value 
          props.updateNewPost(text)
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