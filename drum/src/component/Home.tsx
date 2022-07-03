import React, {useEffect} from 'react'
import Display from './display'
import Drumpad from './drumpad'

export default function Home() {
  return (
    <div id="drum-machine">
      <h1>Drum pad machine</h1>
      <Drumpad/>
      <Display/>
    </div>
  )
}
