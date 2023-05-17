import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import { MyRoutes } from './routers/routes'
import './App.css'

function App() {
  return (
  <div className='App'>
      <Header/>
      <MyRoutes/>
  </div>
  )
}

export default App
