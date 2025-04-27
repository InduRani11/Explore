import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, useNavigate } from 'react-router'

function App() {
 let nav=useNavigate()
  return (
    <>
      <h1 className='p-4 bg-[#0f0]'>hello</h1>
      <Link to="/test" >Test</Link>
      <br />
      <Link to="/test" replace>Testere</Link>
    </>
  )
}

export default App
