import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./languages/i18next.js"
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
    
)
