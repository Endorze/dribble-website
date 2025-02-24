import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mainsection from './Component/Mainsection/mainsection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mainsection />
    </>
  )
}

export default App
