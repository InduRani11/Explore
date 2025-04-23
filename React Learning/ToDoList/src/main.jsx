import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Counter from './Counter';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <Counter/> */}
    <App />
  </>,
);
