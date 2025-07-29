import { useState } from 'react'

const User = () => {
    const [profilePicture, _setProfilePicture] = useState<string>('https://placehold.co/100');
  return (
    <div>
        <img src={profilePicture} alt="" />
    </div>
  )
}

export default User