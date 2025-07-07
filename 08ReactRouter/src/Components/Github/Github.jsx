// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    // const [data, setData] = useState({})
    // useEffect(() => {
    //     fetch('https://api.github.com/users/anubhavpathak03')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })

    // }, [])

    const data = useLoaderData();
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <p className='font-extrabold text-4xl'>Github</p> 
            <p className='text-right mr-10'>followers: {data.followers}</p>
            <img src={data.avatar_url} alt="" className='rounded-2xl h-65' />
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/anubhavpathak03')
    return response.json()
}
