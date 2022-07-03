import React from 'react'
import Display from './display'
import DrumBtn from './dumpad-btn'
import { bankOne, bankTwo } from './sound'

export default function Home() {
  const [result, setResult] = React.useState('')
  return (
    <div id="drum-machine">
      <h1>Drum pad machine</h1>
      {result == 'Smooth Piano Kit' ? (
        <>
          <button className="btn" onClick={() => setResult('Heater Kit')}>
            Heater Kit
          </button>
          <DrumBtn data={bankTwo} />{' '}
        </>
      ) : (
        <>
          <button className="btn" onClick={() => setResult('Smooth Piano Kit')}>
            Smooth Piano Kit
          </button>
          <DrumBtn data={bankOne} />
        </>
      )}

      <Display res={result} />
    </div>
  )
}
