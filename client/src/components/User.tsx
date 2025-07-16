import React, { useState } from 'react'

const User = () => {
    const [profilePicture, setProfilePicture] = useState<string>('https://placehold.co/100');
  return (
    <div>
        <img src={profilePicture} alt="" />
    </div>
  )
}

export default User