import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './component/Home'

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <Home />
  </StrictMode>
)
