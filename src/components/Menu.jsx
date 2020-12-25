import React from "react";
import { Link } from "react-router-dom";


export default function Menu() {
  return (
      <div id="menu">
        <nav>
          <ul>
            <li>
              <Link to="/">One</Link>
            </li>
            <li>
              <Link to="/two">Two</Link>
            </li>
            <li>
              <Link to="/three">Three</Link>
              <li>
              <Link to="/four">Four</Link>
            </li>
            </li>
          </ul>
        </nav>
      </div>
  );
}