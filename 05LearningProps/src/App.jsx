import './App.css'
import Card from './Components/Card'

function App() {
  return (
    <>
      <h1 
      className='bg-amber-300 text-red-600 font-(family-name:--my-font)
      font-extrabold'
      >A PLACE WHERE TECHNOLOGY SHAPES THE FUTURE</h1>
      <Card placeName = "USA, San Fancisco" image = "https://images.pexels.com/photos/1006964/pexels-photo-1006964.jpeg"/>

      <Card placeName = "USA, SILICON VALLEY" image = "https://images.pexels.com/photos/13633184/pexels-photo-13633184.jpeg"/>

      <h1 
      className='bg-amber-300 text-red-600 font-(family-name:--my-font)
      font-extrabold'
      >A BEAUTYFUL CITY</h1>

      <Card placeName = "Italy" image = "https://images.pexels.com/photos/1144265/pexels-photo-1144265.jpeg"/>
      
    </>
  )
}

export default App
