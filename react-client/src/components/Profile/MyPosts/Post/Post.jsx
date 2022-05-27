import React from "react"

import styles from './Post.module.css'

const Post = (props) => {
     return(
          <div className={styles.item}>
               {props.text}
               <div>
                    <span>Like</span>
               </div>
          </div>
     )
}

export default Post