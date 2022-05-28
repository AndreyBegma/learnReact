import React from "react";

import Post from "./Post/Post";

import styles from './MyPosts.module.css'


const MyPosts = () => {
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
                    <Post text="hello" />
                    <Post text="What are you say?"/>
               </div>
          </div>
     )
}

export default MyPosts