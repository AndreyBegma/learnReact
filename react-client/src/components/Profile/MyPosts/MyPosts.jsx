import React from "react";

import Post from "./Post/Post";

import styles from './MyPosts.module.css'


const MyPosts = () => {

     return(
          <div>
               My posts
               <div>
                    <textarea></textarea>
                    <button>Send</button>
               </div>
               <div className={styles.posts}>
                    <Post/>
                    <Post/>
               </div>
          </div>
     )
}

export default MyPosts