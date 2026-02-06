import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/**
 * POINT D'ENTRÉE DE L'APPLICATION
 * 
 * Ce fichier :
 * 1. Importe React et ReactDOM
 * 2. Importe le composant App principal
 * 3. Importe les styles CSS (Tailwind + custom)
 * 4. Crée le root React et rend l'application dans #root
 * 
 * React.StrictMode :
 * - Active des vérifications supplémentaires en développement
 * - Aide à détecter les problèmes potentiels
 * - N'affecte pas la production
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
