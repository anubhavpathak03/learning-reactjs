import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
function App() {
  return (
    <>
      <h1 className='bg-red-400 font-extrabold text-3xl'>Learn redux toolkit</h1>
      <AddTodo/>
      <br />
      <Todos/>
    </>
  )
}

export default App
