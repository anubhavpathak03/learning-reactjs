import React from 'react'

const Card = ({placeName, image, btnText = "VISIT ME"}) => {
  return (
    <div className = "flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
      <div>
          <img 
          className = "size-68 shadow-xl rounded-md" 
          alt="" 
          src={image} 
          />
      </div>

      <div className = "flex flex-col items-center justify-center md:items-start">
        <span className = "text-2xl font-medium">
          {placeName}
        </span>
        <span className = "font-medium text-sky-500">The Anti-Patterns</span>
        <span className = "flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
        </span>
      </div>
      
      <button 
      className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        {btnText } →
      </button>
    </div>
  )
}

export default Card