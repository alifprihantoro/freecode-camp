import React from "react";
import {Link} from "react-router-dom";

export default function Nav() {
  return (
      <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/edit">edit</Link>
          </li>
          <li>
            <Link to="/result">result</Link>
          </li>
      </nav>
  )
}
