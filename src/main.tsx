import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import './index.css'
import App from './App.tsx'
// import LoginPage from './components/LoginScreen.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
=======
import FoodMenu from './components/FoodMenus.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <FoodMenu />
  </StrictMode>,
>>>>>>> mohana/development
)
