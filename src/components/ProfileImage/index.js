import React from 'react';
import ProfilePic from '../../images/profilepic.png'
import "./image.css"

function ProfileImage() {
  return (
    <div className='image-container'>
      <img className="profile-pic" 
      src={ProfilePic}
      />
    </div>
  )
}

export default ProfileImage;