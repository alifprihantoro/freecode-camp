import React from 'react'
import markdown from './compile'
import { default_value } from './value'

interface props {
  edit?: boolean
  result?: boolean
}
export default function Home(props: props) {
  // const [result, setResult] = React.useState(<></>)
  const [value, setValue] = React.useState('')
  React.useEffect(() => {
    setValue(default_value)
    // setResult(
    //   <div id="preview" className="w-full min-h-[200px]" dangerouslySetInnerHTML={{ __html: markdown(default_value) }} />
    // )
  }, [])
  // when klicked
  const change = (e: any) => {
    const value = e.target.value
    // setResult(<div id="preview" className="w-full min-h-[200px]" dangerouslySetInnerHTML={{ __html: markdown(default_value) }} />)
    setValue(value)
  }
  return (
    <div className="cover">
      {props.edit && (
        <>
          <h2 className="title">
            <span>editor</span>
          </h2>
          <textarea
            className="p-2 min-h-[200px] block px-0 w-full text-sm bg-blue-500/10 border-0 focus:border-none focus:ring-0 text-blue-900"
            value={value}
            onChange={(e) => change(e)}
            name="editor"
            id="editor"
          ></textarea>
        </>
      )}
      {props.result && (
        <div className="result">
          <h2 className="title">
            <span>result :</span>
          </h2>
            {/* {result} */}
      <div id="preview" className="w-full min-h-[200px]" dangerouslySetInnerHTML={{ __html: markdown(value) }} />
        </div>
      )}
    </div>
  )
}
