import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const { userid } = useParams()
    return (
        <div className='bg-amber-400 text-3xl text-center py-4'>
            <p className='font-bold'>Making Dynamic Route</p> 
            <br />
            <p>User: {userid}</p>
        </div>
    )
}

export default User