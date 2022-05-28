import React from "react";

import Post from "./Post/Post";

import styles from './MyPosts.module.css'


const MyPosts = () => {
     let postsData = [
          {id:1,postText:'hello'},
          {id:2,postText:'What are you say?'}
     ]

     let postsGenereted = postsData.map((postInfo) => {
          return <Post className={styles.post} text={postInfo.postText}/>
     })
     return(
          <div>
               My posts
               <div>
                    <textarea></textarea>
                    <div>
                         <button>Send</button>
                    </div>
               </div>
               <div className={styles.posts}>
                    {postsGenereted}
               </div>
          </div>
     )
}

export default MyPosts