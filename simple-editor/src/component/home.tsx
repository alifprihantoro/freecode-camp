import React from 'react'
import markdown from './compile'

interface props {
  edit?: boolean
  result?: boolean
}
export default function Home(props: props) {
  const [result, setResult] = React.useState(<></>)
  const [value, setValue] = React.useState('')
  // when klicked
  const change = (e: any) => {
    const value = e.target.value
    setResult(<div dangerouslySetInnerHTML={{ __html: markdown(value) }} />)
    setValue(value)
    return false
  }
  return (
    <div className="cover">
      {props.edit && (
        <>
          <div>edit</div>
          <textarea
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            value={value}
            onChange={(e) => change(e)}
            name="editor"
            id="editor"
          ></textarea>
        </>
      )}
      {props.result && <div className="bg-purple-900">result : {result}</div>}
    </div>
  )
}
