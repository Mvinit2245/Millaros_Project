import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './PracticeComponents/Login.jsx'
import CardUse from './PracticeComponents/CardUse.jsx'
import InputUse from './PracticeComponents/InputUse.jsx'
import ChildrenUse from './PracticeComponents/ChildrenUse.jsx'
import PagesUse from './PracticeComponents/PagesUse.jsx'
import Popup from './components/PopUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
     {/* <CardUse/> */}
     {/* <InputUse/> */}
     {/* <ChildrenUse/> */}
     {/* <PagesUse/> */}
     <Popup/>
  </StrictMode>,
)
