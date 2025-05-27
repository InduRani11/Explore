import { React} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router'
// import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

   <App/>

  </BrowserRouter>
)
