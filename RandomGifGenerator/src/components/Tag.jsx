import React, { useState } from 'react'
// import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';

const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('')
    
  const {gif, error, fetchData, loading} = useGif(tag);

  const clickHandler = () => {
      fetchData(tag)
  }

  const changeHandler = (e) => {
    setTag(e.target.value)
  }

  return (
    <div 
        className='w-1/2 h-[500px] bg-blue-300 border black-border/50 rounded-lg flex flex-col items-center gap-y-9'
    >
        <h1 className='font-bold text-2xl bg-amber-50 w-11/12 text-center mt-10 rounded-2xl'>
            Generate Your Own Random {tag} Gif's
        </h1>
        {
            loading ? (<Spinner/>) : (
                <>
                    {error && <div className="text-red-600">{error}</div>}
                    {gif && (
                        <img
                            src={gif}
                            className='w-[450px] h-[200px] object-contain'
                            alt="Random Gif"
                        />
                    )}
                </>
            )
        }

        <input type="text"
          className='w-11/12 text-lg py-2 rounded-lg mb-[3px] text-center bg-amber-50'
          placeholder='Write your text here...'
          onChange={changeHandler}
          value={tag}
        />

        <button
            onClick={clickHandler}
            className='w-11/12 bg-blue-800 text-white px-4 py-3 rounded-lg cursor-pointer font-bold text-2xl mb-[20px]'
        >
            Generate
        </button>
    </div>
  )
}

export default Tag