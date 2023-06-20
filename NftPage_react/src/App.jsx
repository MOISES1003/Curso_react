import { useState } from 'react'
import { MyRouters } from './routers/router'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <MyRouters/>
  )
}

export default App
