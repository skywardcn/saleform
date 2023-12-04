import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// document.querySelector("#content>div");
//ReactDOM.createRoot(document.getElementById('root')!).render(

const content = document.querySelector("#content>div")!
const gap = document.createElement('p');
content.appendChild(gap);

ReactDOM.createRoot(gap).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
