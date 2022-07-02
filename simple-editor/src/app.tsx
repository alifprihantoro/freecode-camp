import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './component/home'
import Nav from './component/nav'

function App() {
  return (
    <>
      <h1>Simple Text Editor</h1>
      <Nav />
      <Routes>
        <Route path="/" element={<Home result={true} edit={true}/>} />
        <Route path="/edit" element={<Home edit={true}/>} />
        <Route path="/result" element={<Home result={true}/>} />
      </Routes>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
