import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GIPHY_API_KEY;

const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`


function useGif(tag) {
    const [gif, setGif] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
   
    async function fetchData() {
        setLoading(true)
        try {
            setError('');
            setGif('');
            const {data} = await axios.get(tag ? `${URL}&tag=${tag}` : URL)
            const imageSource = data.data.images.downsized_large.url
            // console.log(imageSource);
            if(imageSource)
                setGif(imageSource)
            else {
                setError('No gif found.')
            }
        } catch (err) {
            setError('Failed to Fetch gif.');
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    },[tag])

    return {gif, error, fetchData, loading}
}

export default useGif;