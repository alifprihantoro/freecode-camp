import BtnNew from '@comp/btn-new'
import QuoteAuthor from '@comp/quote-author'
import QuoteTxt from '@comp/quote-txt'
import Twitter from '@comp/twitter'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function App() {
  return (
    <>
      <div id="quote-box">
        <QuoteTxt/>
        <QuoteAuthor/>
        <Twitter/> 
        <BtnNew/> 
      </div>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!) // createRoot(container!) if you use TypeScript
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
