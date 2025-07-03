import { useState } from 'react';
import './App.css'

function App() {
  const [Temperature, setTemperature] = useState(15)
    //    (variable)    (function)
    // let Temperature = 15;

  const addValue = () => {
    // Temperature += 1
    // console.log(Temperature)
    setTemperature(Temperature+1)
  }

  const removeValue = () => {
    // setTemperature(Temperature-1)
    setTemperature((prevTemperature) => prevTemperature - 1)
    setTemperature((prevTemperature) => prevTemperature - 1)
  }

  return (
    <>
      <h1>Hola!! Good Morning🌄🌅🌞. <br/> <br/> Today Temperature is: {Temperature}</h1>
      <h2>Counter Value: {Temperature}</h2>
      <button onClick={addValue}>Add Value</button>
      {" "}
      <button onClick={removeValue}>remove value</button>
      <p>footer: {Temperature}</p>
    </>
  )
}

export default App
