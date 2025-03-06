import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  GeneralContainer  from './components/GeneralContainer/GeneralContainer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GeneralContainer/> */}
    <GeneralContainer/>
  </StrictMode>,
)
