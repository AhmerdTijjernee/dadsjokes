import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DadJoke from './components/DadJoke'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <DadJoke/>
 
    </>
  )
}

export default App
