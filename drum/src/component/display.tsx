import React from 'react'
interface props{
  res:string
}
export default function Display({res}:props) {
  return <div id="display" className="bg-blue-900 p-2 rounded text-white w-full h-[50px] text-center ">{res}</div>
}
