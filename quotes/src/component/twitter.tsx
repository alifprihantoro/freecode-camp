import React from 'react'

interface Prop {
  quote: string
}
export default function Twitter(prop: Prop) {
  const link =
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="' +
    prop.quote +
    '"'
  return (
    <div className="btn">
      <a className="btn" id="tweet-quote" target="_blank" href={link}>
        <i className="delete"></i>
      </a>
    </div>
  )
}
