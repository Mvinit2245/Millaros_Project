import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './PracticeComponents/Login.jsx'
import CardUse from './PracticeComponents/CardUse.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Login/>
     {/* <CardUse/> */}
  </StrictMode>,
)
