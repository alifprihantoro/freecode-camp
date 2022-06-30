import React from 'react'

interface data {
  quote: string
  author: string
}
export default function QuoteAuthor(prop: data) {
  return (
    <>
      <p id="text">"{prop.quote}"</p>
      <span id="author">- {prop.author}</span>
    </>
  )
}
