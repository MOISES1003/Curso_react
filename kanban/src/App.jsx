import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Kanban } from './components/kanban/Kanban'

function App() {

  return (
    <div style={{padding:"50px"}}>
      <h1 style={{marginBottom:'20px'}}>Kanba UI</h1>
      <Kanban/>
    </div>
  )
}

export default App
