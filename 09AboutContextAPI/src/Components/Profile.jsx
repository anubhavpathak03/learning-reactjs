import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <h1>Not Logged In</h1>
  return (
    <div>
        <h3>Profile : {user.username}</h3>
        {" "}
        <h3>Password : {user.password}</h3>
    </div>
    
  )
}

export default Profile