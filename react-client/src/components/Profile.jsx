import React from "react"

const Profile = () => {
     let profilePhoto = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d"
  
     return(
     <div className='content'>
     <div>
       <img className="content-img" src="https://wallpapercave.com/wp/Jg14FgM.jpg"/>
     </div>
     <div>
       <img src={profilePhoto}/>
     </div>
     <div>
       My post
       <div>
         New post
       </div>
     </div>
   </div>)
}

export default Profile