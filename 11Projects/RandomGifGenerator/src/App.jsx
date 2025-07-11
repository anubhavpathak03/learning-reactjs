// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div 
      className='w-full h-dvh flex flex-col font-(family-name:--my-font) items-center'
      style={{
        backgroundImage: "url(/wintery-sunburst.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    > 
      <h1 
        className='bg-white rounded-4xl w-11/12 text-center uppercase font-bold text-4xl px-10 py-2 mt-10'
      >
        Random Gifs
      </h1>
      <div className='flex flex-row w-11/12 items-center gap-x-10 mt-[60px] ml-[20px] mr-[20px]'>
        <Random/>
        {" "}
        <Tag/>
      </div>
    </div>
  )
}

export default App
