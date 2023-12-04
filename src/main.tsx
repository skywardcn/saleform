import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// document.querySelector("#content>div");
//ReactDOM.createRoot(document.getElementById('root')!).render(
ReactDOM.createRoot(document.querySelector("#content>div")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
