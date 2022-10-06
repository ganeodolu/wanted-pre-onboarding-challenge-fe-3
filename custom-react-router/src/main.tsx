import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './lib/Router'
import About from './pages/About'
import Root from './pages/Root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <Router>
      <Root />
      <About />
    </Router>
  // </React.StrictMode>
)
