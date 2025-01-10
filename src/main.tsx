import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import CarouselComponent from './components/MenuComponents/Carosal.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <CarouselComponent />
  </StrictMode>,
)
