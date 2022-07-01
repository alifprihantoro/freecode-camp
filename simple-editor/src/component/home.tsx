import React from "react";
import Editor from "./edit";
import Result from "./result";

export default function Home() {
  return (
    <div className="cover">
      <Editor />
      <Result />
    </div>
  )
}
