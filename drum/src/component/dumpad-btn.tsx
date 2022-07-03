import React from 'react'
import play from './play'
interface props {
  data: {
    keyCode: number
    keyTrigger: string
    id: string
    url: string
  }[]
}
export default function DrumBtn({ data }: props) {
  const clickPlay = (e: any) => play(e)
  return (
    <div className="flex  ">
      {data.map((e: any) => {
        return (
            <div
              key={e.keyCode}
              className="drum-pad select-none	bg-blue-900 p-3 rounded-xl text-white w-fit m-2  "
              id={e.id}
              onClick={() => clickPlay(e.keyCode)}
            >
              <kbd className="text-xs">{e.keyTrigger}</kbd>
              {/* <span>{e.id}</span> */}
              <audio className="clip" data-key={e.keyCode} id={e.keyTrigger} src={e.url}></audio>
            </div>
        )
      })}
    </div>
  )
}
