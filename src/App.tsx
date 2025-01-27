import './App.css'
import Navigate from './Navigate'
import { BrowserRouter } from 'react-router-dom'

function App() {
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
