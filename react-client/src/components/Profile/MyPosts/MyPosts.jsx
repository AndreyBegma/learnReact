import React from "react";

import Post from "./Post/Post";

import styles from './MyPosts.module.css'


const MyPosts = (props) => {
     let postsGenereted = props.postsData.map((postInfo) => {
          return <Post key={postInfo.id} className={styles.post} text={postInfo.postText}/>
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