import React, { useState } from 'react'

interface result2 {
  calc: string
  result: string
}

let result2: result2[] = []
export default function Home() {
  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')
  const [isEqual, setIsEqual] = useState(false)
  const [isDecimal, setIsDecimal] = useState(false)
  const [cek, setCek] = useState([
    {
      calc: '',
      result: '',
    },
  ])
  // const [result2, setResult2] = useState([{
  //   calc:'',
  //   result:''
  // }])
  const ops = ['/', '*', '+', '-', '.']

  const delLast = () => {
    if (calc == '') {
      return
    }
    const val = calc.slice(0, -1)
    setCalc(val)
    return val
  }

  const upCalc = (val: any) => {
    if (calc.slice(-2) === '+-') {
      if (val === '+') {
        setCalc(calc.slice(0, -1))
        return
      }
      setCalc(calc.slice(0, -1) + val)
      return
    }
    if (calc.slice(-2) === '-+') {
      if (val === '-') {
        setCalc(calc.slice(0, -1))
        return
      }
      setCalc(calc.slice(0, -1) + val)
      return
    }

    if (val === '.' && calc === '') {
      setCalc('0.')
      setResult('0.')
      setIsDecimal(true)
      return
    }
    if (val === '.' && isDecimal == true) {
      return
    }
    if (val === '.') {
      setIsDecimal(true)
      setCalc(calc + val)
      setResult(calc + val)
      return
    }

    if (isEqual && ops.includes(val)) {
      setResult(result + val)
      setCalc(result + val)
      setIsEqual(false)
      return
    }
    if (isEqual && val < 10) {
      setResult(val)
      setCalc(val)
      setIsEqual(false)
      return
    }

    if (ops.includes(val) && val !== '.') {
      setIsDecimal(false)
    }
    if (
      (ops.includes(val) && calc === '') ||
      (ops.includes(val) && ops.includes(calc.slice(-1)))
    ) {
      if (ops.includes(calc.slice(-2,-1)) && val === '+') {
        setCalc(calc.slice(0,-2)+val)
        return
      }
      // if (
      //   calc.slice(-2) === '*+' ||
      //   calc.slice(-2) === '/+' ||
      //   calc.slice(-2) === '*-' ||
      //   calc.slice(-2) === '/-'
      // ) {
      //   setCalc(calc.slice(0,-1) + val)
      //   setResult(val)
      //   return
      // }
      if (val === '-' && calc.slice(-1) !== '-') {
        setCalc(calc + val)
        setResult(val)
        return
      }
      if (val === '+' && calc.slice(-1) !== '+') {
        setCalc(calc + val)
        setResult(val)
        return
      }
      return
    }
    if (ops.includes(val) && ops.includes(calc.slice(-1))) {
      const getIt = delLast()
      setCalc(getIt + val)
      setResult(val)
      return
    }
    setCalc(calc + val)
    setResult(result + val)
    if (val < 10 && ops.includes(result)) {
      setResult(val)
      return
    }

    if (val < 10 && calc === '0') {
      setCalc(val)
      setResult(val)
      return
    }
    ops.includes(val) && calc !== '' && setResult(val)
    val === '.' && setResult(result + val)

    // if (!ops.includes(val)) {
    // setResult(eval(calc + val).toString())
    // }
  }

  const createDigit = () => {
    const myId = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ]
    const digit = []
    for (let i = 1; i < 10; i++) {
      digit.push(
        <button id={myId[i - 1]} onClick={() => upCalc(i.toString())} key={i}>
          {i}
        </button>
      )
    }
    return digit
  }

  const calculate = () => {
    const hasil: string = eval(calc).toString()
    const cekHasil = {
      calc: calc,
      result: hasil,
    }
    result2.push(cekHasil)
    setCek(result2)
    setResult(hasil)
    setCalc(hasil)
    setIsEqual(true)
  }
  return (
    <div className="app">
      <div className="calculator">
        <div className="display">
          {calc || 0}
          <div id="display">{result || 0}</div>
        </div>
        <div className="operator">
          <button id="divide" onClick={() => upCalc('/')}>
            /
          </button>
          <button id="multiply" onClick={() => upCalc('*')}>
            *
          </button>
          <button id="add" onClick={() => upCalc('+')}>
            +
          </button>
          <button id="subtract" onClick={() => upCalc('-')}>
            -
          </button>
          <button onClick={delLast}>delete</button>
          <button
            id="clear"
            onClick={() => {
              setResult('')
              setCalc('')
              setIsDecimal(false)
            }}
          >
            clear
          </button>
        </div>
        <div className="digit">
          {createDigit()}
          <button id="zero" onClick={() => upCalc('0')}>
            0
          </button>
          <button id="decimal" onClick={() => upCalc('.')}>
            .
          </button>
        </div>
        <button id="equals" onClick={calculate}>
          =
        </button>
      </div>
      <div>
        History :
        {cek.map((e) => (
          <ul key={e.calc}>
            <li>rumus : {e.calc}</li>
            <li>hasil : {e.result}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}
// {result2}
