
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Learning Context API</h1>
      <Login/>
      <Profile/>
      <h1>MORE COMPONENTS....</h1>
    </UserContextProvider>
  )
}

export default App
