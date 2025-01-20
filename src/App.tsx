import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FloorTab from './components/Tables/FloorTab'

import Navigate from './Navigate'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <BrowserRouter>
          <Navigate />
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
