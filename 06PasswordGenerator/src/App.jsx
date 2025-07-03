import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [Password, SetPassword] = useState('')

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*(){}[]_-+";

    for(let i = 1; i < length; i++) {
      const char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    SetPassword(pass);
  }, [length, numberAllowed, characterAllowed])
  
  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  const passwordRef = useRef(null);

  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(Password);
    passwordRef.current?.select();
  }


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 font-(family-name:--my-font)'>

      <h1 className='text-white text-center my-3'>
        Password Generator
      </h1>
      
      {/* contains the input block */}
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value = {Password}
        className='outline-none w-full py-1 px-3 bg-white text-orange-600'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />

        <button 
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
        >
          copy
        </button>
      </div>

      {/* containes slider or check box */}
      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input 
            type="range" 
            name=""
            id=""
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />

          <label htmlFor="length">
            Length: {length}
          </label>

        </div>

        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            name=""
            id=""  
          />
          <label htmlFor="number">
            Numbers
          </label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={characterAllowed}
            onChange={() => {
              setCharacterAllowed((prev) => !prev)
            }}
            name=""
            id="" 
          />
          <label htmlFor="charInput">
            Character
          </label>
        </div>

      </div>
    </div>
  )
}

export default App
