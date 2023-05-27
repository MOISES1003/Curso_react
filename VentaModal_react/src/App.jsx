import { useState } from 'react'
import { Modal } from './components/Modal'
import './App.css'

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
  <div>
    <button onClick={()=>setOpenModal(true)}>abrir Modal</button>
    <Modal open={openModal} onClose={()=>setOpenModal(false)} />
  </div>
  )
}

export default App
