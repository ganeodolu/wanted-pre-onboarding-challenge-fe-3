import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './lib/Route'
import Router from './lib/Router'
import About from './pages/About'
import Root from './pages/Root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Route path='/' element={<Root/>} />
    <Route path='/about' element={<About/>} />
  </Router>
)
