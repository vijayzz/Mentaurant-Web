import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import CarouselComponent from './components/MenuComponents/Carosal.tsx'
import App from './App.tsx'
import TableMain from './components/Tables/TableMain.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     {/* <App /> */}
    {/* <CarouselComponent /> */}
    {/* <FloorTab/> */}
    <TableMain/>
  </StrictMode>,
)
