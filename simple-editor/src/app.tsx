import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Editor from './component/edit'
import Home from './component/home'
import Nav from './component/nav'
import Result from './component/result'
import markdown from './component/tes'

function App() {
  const [result, upResult] = React.useState('')
  React.useEffect(() => {
    const compile: string = markdown(
      '# Marked in Node.js\n\nRendered by **mked**.'
    )
    upResult(compile)
  })
  return (
    <>
      <h1>Simple Text Editor</h1>
      <Nav />
      {result}
      <div dangerouslySetInnerHTML={{__html: result}}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Editor />} />
        <Route path="/result" element={<Result />} />
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
