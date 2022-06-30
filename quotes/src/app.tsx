import Header from '@comp/header';
import React, { useState, useEffect } from 'react';
import { render } from "react-dom";

function App() {
  return (
    <>
      <Header></Header>
      <p>
         ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        odit pariatur beatae quibusdam facilis exercitationem. Fuga eum facere
        commodi ipsa cum maxime ipsam dolore recusandae possimus dicta! Qui,
        accusamus ipsa.
      </p>
    </>
  );
}
render(<App />, document.getElementById("root"));
