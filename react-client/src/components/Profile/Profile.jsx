import React from "react"

import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"

import styles from './Profile.module.css'


const Profile = (props) => {
     let profilePhoto = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
  
     return(
      <div className='app-wrapper-content'>
      <div>
        <img className={styles.content_img} src="https://wallpapercave.com/wp/Jg14FgM.jpg"/>
      </div>
      <ProfileInfo profilePhoto={profilePhoto}/>
      <MyPosts postsData={props.postsData} addPost={props.addPost} 
        newPostText={props.newPostText} updateNewPost={props.updateNewPost}
      />
   </div>)
}

export default Profile