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
    <a className="btn itwit" id="tweet-quote" target="_blank" href={link}>
      share on tweet
    </a>
  )
}
