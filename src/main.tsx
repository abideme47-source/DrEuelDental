import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ScrollAnimationProvider } from './components/ScrollAnimationProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ScrollAnimationProvider>
      <App />
    </ScrollAnimationProvider>
  </React.StrictMode>,
)
