import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(5) // initial value means when app loads or render this value defualt

  //for increase and decrease values first we need to create functions for both

  const addValue = () => {
    if (counter <= 9) {  
    setCounter(counter + 1)
    }
  }

  const desValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Counter Practice</h1>
      <h2>Counter Value :{counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={desValue}>Decrease Value</button>
    </>
  )
}

export default App
