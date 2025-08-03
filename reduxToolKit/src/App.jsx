import { useState } from 'react'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>code is running</h1>
      <Addtodo/>
      <Todos/>
    </>
  )
}

export default App
