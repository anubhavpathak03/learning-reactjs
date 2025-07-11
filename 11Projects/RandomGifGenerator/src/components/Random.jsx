import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;

const Random = () => {
    
    // const [gif, setGif] = useState('')
    // const [error, setError] = useState('')
    // const [loading, setLoading] = useState(false);
   
    // async function fetchData() {
    //     setLoading(true)
    //     try {
    //         setError('');
    //         setGif('');
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    //         const {data} = await axios.get(url)
    //         const imageSource = data.data.images.downsized_large.url
    //         // console.log(imageSource);
    //         if(imageSource)
    //             setGif(imageSource)
    //         else {
    //             setError('No gif found.')
    //         }
    //     } catch (err) {
    //         setError('Failed to Fetch gif.');
    //     }
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // },[])
    
    const {gif, error, fetchData, loading} = useGif();


    const clickHandler = () => {
        fetchData()
    }

  return (
    <div 
        className='w-1/2 bg-green-300 border black-border/50 rounded-lg flex flex-col items-center gap-y-10'
    >
        <h1 className='font-bold text-2xl bg-amber-50 w-11/12 text-center mt-10 rounded-2xl'>
            Your Random Gif's
        </h1>

        {
            loading ? 

            (<Spinner/>) : (
                <>
                    {error && <div className="text-red-600">{error}</div>}
                    {gif && (
                        <img
                            src={gif}
                            className='w-[450px] h-[300px] object-contain'
                            alt="Random Gif"
                        />
                    )}
                </>
            )
        }


        <button
            onClick={clickHandler}
            className='w-11/12 bg-blue-800 text-white px-4 py-3 rounded-lg cursor-pointer font-bold text-2xl mb-[20px]'
        >
            Generate
        </button>
    </div>
  )
}

export default Random