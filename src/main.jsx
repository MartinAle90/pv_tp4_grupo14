import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Producto from './assets/components/Producto'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Producto />
  </StrictMode>,
)
