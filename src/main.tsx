import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/scss/bootstrap.scss';


import LoginPage from './components/LoginScreen.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <LoginPage />
  </StrictMode>,
)
