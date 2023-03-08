import React from 'react'
import profileImage from '../images/profile-img.svg'

function UserDetails() {
  return (
    <div class="col profile">
        <div>
            <img src={profileImage} alt="" />
        </div>
        <div class="profile-name">
            <p>Sandra Michaels</p>
            <span>Software Developer</span>
        </div>
    </div>
  )
}

export default UserDetails