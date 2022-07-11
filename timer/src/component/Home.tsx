import React, { useEffect, useState } from 'react'
import play from './play'
export default function Home() {
  const [awalsession, setawalsession] = useState(1500)
  const [awalbreak, setawalbreak] = useState(300)
  const [count, setcount] = useState(awalsession)
  const [stop, setstop] = useState(true)
  const [myType, setmyType] = useState('session')
  // btn ---------
  function counTing(stop: boolean, count: number) {
    if (stop == false && myType === 'break') {
      if (count >= 2) {
        setcount(count - 1)
      } else {
        play()
        setmyType('session')
        setcount(awalsession)
      }
    } else if (stop == false && myType === 'session') {
      if (count >= 1) {
        setcount(count - 1)
      } else {
        play()
        setmyType('break')
        setcount(awalbreak)
      }
    } else {
      return
    }
  }
  useEffect(() => {
    if (!stop) {
      let timer = setInterval(() => counTing(stop, count), 1000)
      return () => clearTimeout(timer)
    }
  }, [stop, count])
  // play
  function playIng() {
    setcount(count - 1)
    setstop(false)
  }
  // pause
  function pause() {
    setstop(true)
  }
  // reload
  return (
    <div>
      <div>
        <div id="break-label">break</div>
        <button
          id="break-increment "
          onClick={() => {
            const tambah = awalbreak + 60
            if (tambah < 0 || tambah > 3600) return
            if (stop) {
              setawalbreak(tambah)
              if (myType === 'break') {
                setcount(tambah)
              }
            }
          }}
        >
          up
        </button>
        <div id="break-length">{Math.floor(awalbreak / 60) || 1}</div>
        <button
          id="break-decrement"
          onClick={() => {
            const kurang = awalbreak - 60
            if (kurang <= 1 || kurang > 3600) return
            if (stop) {
              setawalbreak(kurang)
              if (myType === 'break') {
                setcount(kurang)
              }
            }
          }}
        >
          down
        </button>
      </div>
      <div>
        <div id="session-label">session</div>
        <button
          id="session-increment"
          onClick={() => {
            const tambah = awalsession + 60
            if (tambah <= 1 || tambah > 3600) return
            if (stop) {
              setawalsession(tambah)
              if (myType === 'session') {
                setcount(tambah)
              }
            }
          }}
        >
          up
        </button>
        <div id="session-length">{Math.floor(awalsession / 60) || 1}</div>
        <button
          id="session-decrement"
          onClick={() => {
            const kurang = awalsession - 60
            if (kurang <= 1 || kurang > 3600) return
            if (stop) {
              setawalsession(kurang)
              if (myType === 'session') {
                setcount(kurang)
              }
            }
          }}
        >
          down
        </button>
      </div>
      <div>
        <div id="timer-label">{myType}</div>
        <div id="time-left">
          {`${Math.floor(count / 60) == 0 ? '00' : Math.floor(count / 60)}:${count % 60 == 0 ? '00' : count % 60}` ||
            '0:0'}
        </div>
      </div>
      <button
        id="start_stop"
        onClick={() => {
          if (stop) {
            playIng()
          } else {
            pause()
          }
        }}
      >
        {stop ? 'play' : 'stop'}
      </button>
      <button
        id="reset"
        onClick={() => {
          setstop(true)
          setawalsession(1500)
          setawalbreak(300)
          setcount(awalsession)
        }}
      >
        reload
      </button>
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
    </div>
  )
}
