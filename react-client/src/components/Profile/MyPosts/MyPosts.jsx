import React from "react";

import Post from "./Post/Post";

import styles from './MyPosts.module.css'


const MyPosts = () => {
     let postsData = [
          {id:1,postText:'hello'},
          {id:2,postText:'What are you say?'}
     ]
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
                    <Post className={styles.post} text={postsData[0].postText}/>
                    <Post className={styles.post} text={postsData[1].postText}/>
               </div>
          </div>
     )
}

export default MyPosts