import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter ,Routes , Route } from 'react-router'
import BlogModel from './BlogModel.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/App' element={<App/>} />
        <Route path='/blogmodel' element={<BlogModel/>} />


  </Routes>

  </BrowserRouter>
)
