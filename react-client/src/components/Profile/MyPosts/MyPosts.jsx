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
                    <Post text="hello" />
                    <Post text="What are you say?"/>
               </div>
          </div>
     )
}

export default MyPosts