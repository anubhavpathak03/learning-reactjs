import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if(!user) return <h1>Not Logged In</h1>
    else if(!user.username || !user.password) return <h3 >🚨🚨🚨 What You want You didn't enter anything Please Login First</h3>
  return (
    <div>
        <h3>Profile : {user.username}</h3>
        {" "}
        <h3>Password : {user.password}</h3>
    </div>
    
  )
}

export default Profile