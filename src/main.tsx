import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FoodMenu from './components/FoodMenus.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <FoodMenu />
  </StrictMode>,
)
