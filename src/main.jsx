import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Producto from './assets/components/Producto'
import './assets/css/Producto.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Producto />
  </StrictMode>,
)
