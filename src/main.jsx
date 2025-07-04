import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import NewsBar from './components/NewsBar/NewsBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <App />
    <NavBar/>
    <NewsBar/>
    </>
  </StrictMode>,
)
