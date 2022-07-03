import React, { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './component/Home'
import keydown from './component/keydown'

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
// if keydown
keydown()
root.render(
  <StrictMode>
    <Home />
  </StrictMode>
)
