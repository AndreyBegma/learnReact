import React from "react";

import styles from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
     return(
       <div>
         <img className={styles.profile_photo} src={props.profilePhoto} alt=""/>
         Discription
       </div>
     )
}

export default ProfileInfo

