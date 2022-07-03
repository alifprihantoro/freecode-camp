import React from 'react'
import DrumBtn from './dumpad-btn'
import { bankOne, bankTwo } from './sound'

export default function Drumpad() {
  return (
    <div id="btn-drum">
      <DrumBtn data={bankOne} />
      <DrumBtn data={bankTwo} />
    </div>
  )
}
