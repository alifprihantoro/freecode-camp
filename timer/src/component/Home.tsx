import React, { useState } from 'react'
export default function Home() {
  const [awalbreak, setawalbreak] = useState('')
  const [awalsession, setawalsession] = useState('')
  const [count, setcount] = useState('')
  // btn ---------
  // play
  // pause
  // reload
  // up break
  // up session
  //
  // down break
  // down session
  return (
    <div>
      <div>
        <button>up</button>
        {awalbreak || 0}
        <button>down</button>
      </div>
      <div>
        <button>up</button>
        {awalsession || 0}
        <button>down</button>
      </div>
      <div>{count || 0}</div>
      <button>play</button>
      <button>pause</button>
      <button>reload</button>
    </div>
  )
}
