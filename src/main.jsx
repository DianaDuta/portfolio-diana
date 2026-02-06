/* --------------------------------------------------------------------------
   ARCHIVO: main.jsx
   FUNCIÓN: Inicializar React y "montar" la aplicación en el DOM.
   -------------------------------------------------------------------------- */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Importa los estilos globales (reset y variables)
import App from './App.jsx' // Importa el componente raíz

// Buscamos el div con id "root" en el HTML y renderizamos nuestra App dentro
createRoot(document.getElementById('root')).render(
  /* StrictMode: Herramienta de desarrollo que renderiza dos veces los componentes
     para detectar efectos secundarios impuros o APIs obsoletas. 
     (No afecta a producción).
  */
  <StrictMode>
    <App />
  </StrictMode>,
)